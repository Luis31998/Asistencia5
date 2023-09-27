import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserRoleService } from '../services/user-role.service'; // Importa el servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private userRoleService: UserRoleService // Inyecta el servicio
  ) { }

  ngOnInit() {}

  async login(user: User) {
    
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Espere un momento por favor..."
      });
      await loader.present();

      try {
        const credentials = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
        
        if (credentials.user) {
          // Autenticación exitosa
          console.log(credentials.user);

          // Obtener el documento del usuario basado en el UID
          const userDoc = this.firestore.collection('users').doc(credentials.user.uid).valueChanges();
          userDoc.subscribe((userData: any) => {
            if (userData) {
              console.log('Documento del usuario:', userData);

              // Establecer el rol en el servicio UserRoleService
              this.userRoleService.setRole(userData.role);

              // Redirigir al usuario a la página de inicio
              this.navCtrl.navigateRoot("home");
            } else {
              this.showToast("Usuario no registrado");
            }
          });
        } else {
          this.showToast("Usuario no registrado");
        }
      } catch (e: any) {
        e.message = "Usuario no registrado";
        let errorMessage = e.message || e.getLocalizedMessage();
        this.showToast(errorMessage);     
      }

      await loader.dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Ingrese un correo");
      return false;
    }

    if (!this.user.password) {
      this.showToast("Ingrese una contraseña");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 5000
    }).then(toastData => toastData.present());
  }
}



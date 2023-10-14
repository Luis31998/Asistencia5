import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../services/user-role.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userRole: string = "";

  constructor(
    private userRoleService: UserRoleService,
    private afAuth: AngularFireAuth, // Inyecta AngularFireAuth
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.userRole = this.userRoleService.getRole();
  }

  isAyudante(): boolean {
    return this.userRoleService.getRole() === 'ayudante';
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      // El usuario ha cerrado sesión exitosamente
      // Redirige al usuario a la página de inicio de sesión o a cualquier otra página según tu aplicación
      this.navCtrl.navigateRoot('login'); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  inicio(){}
  parte(){
    this.router.navigate(['partes'])
  }
  cerrarSesion(){
    this.router.navigate(['home'])
  }
  administrar(){
    this.router.navigate(['administracion'])
  }
}

import { Component, OnInit, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-bombero-form',
  templateUrl: './bombero-form.component.html',
  styleUrls: ['./bombero-form.component.scss'],
})
export class BomberoFormComponent  implements OnInit {
  @Input() modo: 'agregar' | 'modificar' = 'agregar'; // Valor predeterminado es 'agregar'
  @Input() bombero: any; // Datos del bombero a modificar
  // listaCargos: any[]; // La lista de cargos obtenida de la base de datos
  // listaTiposBombero: any[]; // La lista de tipos de bombero obtenida de la base de datos
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  cerrarFormulario() {
    this.modalController.dismiss();
  }

  guardarBombero() {
    // Aquí puedes agregar la lógica para guardar o modificar el bombero
    // Luego, cierra el formulario
    this.modalController.dismiss();
  }

}

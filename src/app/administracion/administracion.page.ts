import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-bd.service';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  listaDeBomberos: any[] = [];

  bombero: any = {
    idBombero: 0,
    nombre: '',
    pApellido: '',
    sApellido: '',
    cargo: '',
    tipoBombero: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerBomberos();
  }

  obtenerBomberos(): void {
    this.apiService.getAllBomberos().subscribe((data: any) => {
      this.listaDeBomberos = data;
    },
    error => {
      console.error('Hubo un error al obtener los datos:', error);
    });
  }

 modificarBombero(bombero: any): void {
    this.apiService.updateBomberos(bombero.id, bombero).subscribe(response => {
      // Puedes manejar la respuesta aquí, por ejemplo, actualizar la lista o mostrar un mensaje al usuario
    },
    error => {
      console.error('Hubo un error al modificar el bombero:', error);
    });
}

  borrarBombero(bomberoId: number): void {
    // Aquí llamarías a tu método de servicio para borrar el bombero
    this.apiService.deleteBombero(bomberoId).subscribe(response => {
      // Después de borrar con éxito, es posible que desees actualizar la lista de bomberos
      this.obtenerBomberos();
    },
    error => {
      console.error('Hubo un error al borrar el bombero:', error);
    });
  }

  agregarBombero(){
    const data = {
      nombre: this.bombero.nombre,
      papellido: this.bombero.pApellido,
      sapellido: this.bombero.sApellido,
      cargo: this.bombero.cargo,
      tipobombero: this.bombero.tipoBombero
      // ... otros campos
  };
    // Luego llamas al servicio para guardar los datos
    this.apiService.addBomberos(data).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
  }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
  });
  }
}

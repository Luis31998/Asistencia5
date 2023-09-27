import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { IonLabel, IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.page.html',
  styleUrls: ['./partes.page.scss'],
})
export class PartesPage implements OnInit {

  @ViewChild('selectComponent') selectComponent: IonSelect = null!; // Referencia al ion-select

  selectedOption: string = '';
  fields: any[] = [];
  addedOptions: Set<string> = new Set();
  miTexto: string = '';
  miFecha: string = new Date().toISOString().split('T')[0];

  options = [
    { value: 'opcion1', label: 'Despacho' },
    { value: 'opcion2', label: 'Maquinas de apoyo' },
    { value: 'opcion3', label: 'Otras instituciones' },
    { value: 'opcion4', label: 'Monitoreo' },
    { value: 'opcion5', label: 'Vehiculos Involucrados' },
    { value: 'opcion6', label: 'Involucrados' },
    { value: 'opcion7', label: 'Cancelar' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openSelector() {
    this.selectComponent.open();
  }

  onOptionChange() {
    if(!this.addedOptions.has(this.selectedOption)) {
      this.addFieldsForOption(this.selectedOption);
      //this.addedOptions.add(this.selectedOption); // evitara que los campos de la opcion vuelvan a aparecer si se selecciona
    }
  }

  addFieldsForOption(option: string) {
    switch (option) {
      case 'opcion1':
        this.miTexto = 'Despacho'
        // agregar campos para la opción 1
        this.fields.push({ type: 'time', label: 'Salida', value: '' });
        this.fields.push({ type: 'time', label: 'Llegada', value: '' });
        this.fields.push({ type: 'text', label: 'Mando', value: '' });
        this.fields.push({ type: 'text', label: 'Conductor', value: '' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion2':
        this.miTexto = 'Maquinas de apoyo'
        // agregar campos para la opción 2
        this.fields.push({ type: 'text', label: 'Maquinas de apoyo', value: '' });
        // ... agregar más campos si es necesario
        break;
      // ... otros casos
      case 'opcion3':
        this.miTexto = 'Otras instituciones'
        // agregar campos para la opción 3
        this.fields.push({ type: 'text', label: 'Otras instituciones', value: '' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion4':
        this.miTexto = 'Monitoreo'
        // agregar campos para la opción 4
        this.fields.push({ type: 'number', label: 'LEL', value: '' });
        this.fields.push({ type: 'text', label: 'O2', value: '' });
        this.fields.push({ type: 'number', label: 'CO', value: '' });
        this.fields.push({ type: 'number', label: 'H2S', value: '' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion5':
        this.miTexto = 'Vehiculos Involucrados'
        // agregar campos para la opción 5
        this.fields.push({ type: 'text', label: 'Patente', value: '' });
        this.fields.push({ type: 'text', label: 'Marca', value: '' });
        this.fields.push({ type: 'text', label: 'Modelo', value: '' });
        break;
      case 'opcion6':
        this.miTexto = 'Involucrados'
        // agregar campos para la opción 6
        this.fields.push({ type: 'text', label: 'Rut', value: '' });
        this.fields.push({ type: 'text', label: 'Nombre', value: '' });
        this.fields.push({ type: 'text', label: 'Primer Apellido', value: '' });
        this.fields.push({ type: 'text', label: 'Segundo Apellido', value: '' });
        this.fields.push({ type: 'text', label: 'Observaciones', value: '' });
        // ... agregar más campos si es necesario
        break;
    }
  }

  addField() {
    // Añade un campo adicional (personalizar según necesidades)
    this.fields.push({ type: 'text', label: 'Campo Adicional', value: '' });
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  cerrarSesion(){
    this.router.navigate(['home'])
  }
  
  inicio(){}
  parte(){
    this.router.navigate(['partes'])
  }
}

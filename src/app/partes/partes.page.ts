
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { IonLabel, IonSelect } from '@ionic/angular';
import { ApiService } from '../services/api-bd.service';
import { Time } from '@angular/common';

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

  numServicio: number = 0;
  miFecha: string = new Date().toISOString().split('T')[0];
  direccion: string ='';
  observacion: string ='';
  codClaveDespacho: string ='';

  rutInvolucrado: string ='';
  nombreInvolucrado: string ='';
  primerApellidoInvolucrado: string ='';
  segundoApellidoInvolucrado: string ='';
  observacionInvolucrado: string ='';

  horaDespacho: string = '';
  horaLlegada: string = '';
  idParte: number = 0;
  idUnidad: number = 0;
  selectedMaquinista: number = 0;

  codClaveRecurso: string = '';

  idUnidadExterna: string = '';

  patente: string = '';
  marca: string = '';
  modelo: string = '';

  lel: number = 0;
  o2: number = 0;
  co: number = 0;
  h2s: number = 0;


  bomberos: any[] = [];
  clavedespacho: any[] = [];
  claverecursos: any[] = [];
  unidades: any[] = [];
  unidadesexternas: any[] = [];
  maquinistas: any[] = [];

  options = [
    { value: 'opcion1', label: 'Despacho' },
    { value: 'opcion2', label: 'Maquinas de apoyo' },
    { value: 'opcion3', label: 'Otras instituciones' },
    { value: 'opcion4', label: 'Monitoreo' },
    { value: 'opcion5', label: 'Vehiculos Involucrados' },
    { value: 'opcion6', label: 'Involucrados' },
    { value: 'opcion7', label: 'Cancelar' },
  ];

  constructor(private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.loadBomberos();
    this.loadClaveDespacho();
    this.loadClaveRecursos();
    this.loadUnidades();
    this.loadUnidadesExternas();
    this.loadMaquinistas();
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
        this.fields.push({ type: 'time', label: 'Salida', reference: 'horaDespacho' });
        this.fields.push({ type: 'time', label: 'Llegada', reference: 'horaLlegada'});
        this.fields.push({ type: 'text', label: 'unidad', reference: 'idUnidad' });
        this.fields.push({ type: 'text', label: 'Conductor', reference: 'selectedMaquinista' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion2':
        this.miTexto = 'Maquinas de apoyo'
        // agregar campos para la opción 2
        this.fields.push({ type: 'text', label: 'unidad externa', reference: 'idUnidadExterna'});
        // ... agregar más campos si es necesario
        break;
      // ... otros casos
      case 'opcion3':
        this.miTexto = 'Otras instituciones'
        // agregar campos para la opción 3
        this.fields.push({ type: 'text', label: 'Otras instituciones', reference: 'codClaveRecurso' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion4':
        this.miTexto = 'Monitoreo'
        // agregar campos para la opción 4
        this.fields.push({ type: 'number', label: 'LEL', reference: 'lel' });
        this.fields.push({ type: 'number', label: 'O2', reference: 'o2' });
        this.fields.push({ type: 'number', label: 'CO', reference: 'co' });
        this.fields.push({ type: 'number', label: 'H2S', reference: 'h2s' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion5':
        this.miTexto = 'Vehiculos Involucrados'
        // agregar campos para la opción 5
        this.fields.push({ type: 'text', label: 'Patente', reference: 'patente' });
        this.fields.push({ type: 'text', label: 'Marca', reference: 'marca' });
        this.fields.push({ type: 'text', label: 'Modelo', reference: 'modelo' });
        break;
      case 'opcion6':
        this.miTexto = 'Involucrados'
        // agregar campos para la opción 6
        this.fields.push({ type: 'text', label: 'Rut', reference: 'rutInvolucrado' });
        this.fields.push({ type: 'text', label: 'Nombre', reference: 'nombreInvolucrado' });
        this.fields.push({ type: 'text', label: 'Primer Apellido', reference: 'primerApellidoInvolucrado' });
        this.fields.push({ type: 'text', label: 'Segundo Apellido', reference: 'horaDespsegundoApellidoInvolucradoacho' });
        this.fields.push({ type: 'text', label: 'Observaciones', reference: 'observacionInvolucrado' });
        // ... agregar más campos si es necesario
        break;
    }
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

  updateValue(reference: string, value: any) {
    if (this.hasOwnProperty(reference)) {
    (this as any)[reference] = value;
}
}

  /// Metodos para obtener los datos

  loadBomberos() {
    this.apiService.getAllBomberos().subscribe((response: any) => {
        console.log(response); // Esto te mostrará los datos en la consola del navegador.
        this.bomberos = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  loadClaveDespacho() {
    this.apiService.getClaveDespacho().subscribe((response: any) => {
        this.clavedespacho = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  loadClaveRecursos() {
    this.apiService.getClaveRecurso().subscribe((response: any) => {
        this.claverecursos = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  loadUnidades() {
    this.apiService.getUnidades().subscribe((response: any) => {
        this.unidades = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  loadUnidadesExternas() {
    this.apiService.getAllUnidadExterna().subscribe((response: any) => {
        this.unidadesexternas = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  loadMaquinistas() {
    this.apiService.getMaquinistas().subscribe((response: any) => {
        this.maquinistas = response;  // asumiendo que tu API devuelve una lista directamente
    });
  }

  //// A PARTIR DE AQUI SON LOS METODOS DE GUARDAR LOS DATOS POR EL BOTON DE GUARDAR.

  guardar() {
    // Aquí recopilas los datos del formulario. Este es solo un ejemplo simple:
    const dataPartes = {
      NUMSERVICIO: this.numServicio,
      FECHA: this.miFecha,
      DIRECCION: this.direccion,
      OBSERVACION: this.observacion,
      COD_CLAVE_DESPACHO: this.codClaveDespacho
    };

    const dataInvolucrados = {
      T_INVOLUCRADO: this.rutInvolucrado, 
      NOMBRE: this.nombreInvolucrado,
      P_APELLIDO: this.primerApellidoInvolucrado,
      S_APELLIDO: this.segundoApellidoInvolucrado,
      OBSERVACION: this.observacionInvolucrado
    };

    const dataUniDespacho = {
      HORA_DESPACHO: this.horaDespacho,
      HORA_LLEGADA: this.horaLlegada,
      // ID_PARTE: this.idParte, 
      ID_UNIDAD: this.idUnidad, 
      ID_MAQUINISTA: this.selectedMaquinista 
    };

    const dataRecurso = {
      COD_CLAVE_DESPACHO: this.codClaveDespacho,
      // ID_PARTE: this.idParte, 
      COD_CLAVE_RECURSO: this.codClaveRecurso
    };

    const dataApoyo = {
      COD_CLAVE_DESPACHO: this.codClaveDespacho,
      // ID_PARTE: this.idParte, 
      ID_UNIDAD_EXTERNA: this.idUnidadExterna
    };

    const dataVehiculos = {
      PATENTE: this.patente,
      MARCA: this.marca,
      MODELO: this.modelo, 
    };

    const dataMonitoreo = {
      LEL: this.lel,
      O2: this.o2,
      CO: this.co,
      H2S: this.h2s,
    };

    // Luego llamas al servicio para guardar los datos
    this.apiService.addPartes(dataPartes).subscribe(response => {
        // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
        // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });

      //Otro conjunto de datos para una tabla

      this.apiService.addInvolucrados(dataInvolucrados).subscribe(response => {
        // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
        // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });

    //Otro conjunto de datos para una tabla

    this.apiService.addUnidadDespacho(dataUniDespacho).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });



    this.apiService.addRecurso(dataRecurso).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });

    //Otro conjunto de datos para una tabla

    this.apiService.addApoyo(dataApoyo).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });

    //Otro conjunto de datos para una tabla

    this.apiService.addVehiculos(dataVehiculos).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });

    //Otro conjunto de datos para una tabla

    this.apiService.addMonitoreo(dataMonitoreo).subscribe(response => {
      // Por ejemplo, podrías mostrar un toast o alerta indicando que el guardado fue exitoso.
    }, error => {
      // Aquí manejas los errores, por ejemplo, mostrando un mensaje al usuario.
    });
  }
}

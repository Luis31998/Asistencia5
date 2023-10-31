
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { IonLabel, IonSelect } from '@ionic/angular';
import { ApiService } from '../services/api-bd.service';
import { Time } from '@angular/common';
import { Parte } from '../interfaces/parte';


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


  initialCodClaveDespacho: string = '';


  rutInvolucrado: string ='';
  nombreInvolucrado: string ='';
  primerApellidoInvolucrado: string ='';
  segundoApellidoInvolucrado: string ='';
  observacionInvolucrado: string ='';

  // Tus variables iniciales
  initialRutInvolucrado: string = '';
  initialNombreInvolucrado: string = '';
  initialPrimerApellidoInvolucrado: string = '';
  initialSegundoApellidoInvolucrado: string = '';
  initialObservacionInvolucrado: string = '';

  horaDespacho: string = '';
  horaLlegada: string = '';
  idParte: number = 0;
  idUnidad: number = 0;
  selectedMaquinista: number = 0;

  initialHoraDespacho: string = '';
  initialHoraLlegada: string = '';
  initialIdParte: number = 0;
  initialIdUnidad: number = 0;
  initialSelectedMaquinista: number = 0;


  codClaveRecurso: string = '';

  initialCodClaveRecurso: string = '';


  idUnidadExterna: string = '';

  initialIdUnidadExterna: string = '';

  patente: string = '';
  marca: string = '';
  modelo: string = '';

  initialPatente: string = '';
  initialMarca: string = '';
  initialModelo: string = '';


  lel: number = 0;
  o2: number = 0;
  co: number = 0;
  h2s: number = 0;

  initialLel: number = 0;
  initialO2: number = 0;
  initialCo: number = 0;
  initialH2s: number = 0;


  bomberos: any[] = [];
  clavedespacho: any[] = [];
  claverecursos: any[] = [];
  unidades: any[] = [];
  unidadesexternas: any[] = [];
  maquinistas: any[] = [];

  selectedBomberos: number[] = [];


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
        this.fields.push({ type: 'select', label: 'Unidad', reference: 'idUnidad', options: this.unidades, valueField: 'ID_UNIDAD', displayField: 'NOMBRE_UNIDAD' });
        this.fields.push({ type: 'select', label: 'Conductor', reference: 'selectedMaquinista', options: this.maquinistas, valueField: 'ID_MAQUINISTA', displayField: 'NOMBRE_MAQUINISTA' });
        // ... agregar más campos si es necesario
        break;
      case 'opcion2':
        this.miTexto = 'Maquinas de apoyo'
        // agregar campos para la opción 2
        this.fields.push({ type: 'select', label: 'unidad externa', reference: 'idUnidadExterna', options: this.unidadesexternas, valueField: 'ID_UNIDAD_EXTERNA', displayField: 'NOMBRE_UNIDAD' });
        // ... agregar más campos si es necesario
        break;
      // ... otros casos
      case 'opcion3':
        this.miTexto = 'Otras instituciones'
        // agregar campos para la opción 3
        this.fields.push({ type: 'select', label: 'Otras instituciones', reference: 'codClaveRecurso', options: this.claverecursos, valueField: 'COD_CLAVE_RECURSO', displayField: 'DESCRIPCION' });
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
    this.router.navigate([''])
  }
  
  inicio(){
    this.router.navigate(['home'])
  }
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

    this.insertarParte().then(generatedId => {
      this.idParte = generatedId;

      return this.insertarAsistencias();
    }).then(() => {
      return this.insertarInvolucrados();
    }).then(() => {
        return this.insertarUniDespacho();
    }).then(() => {
        return this.insertarRecurso();
    }).then(() => {
        return this.insertarApoyo();
    }).then(() => {
        return this.insertarVehiculos();
    }).then(() => {
        return this.insertarMonitoreo();
    }).catch(error => {
        console.error("Hubo un error durante las inserciones:", error);
        // Aquí puedes manejar errores generales o mostrar un mensaje al usuario.
    });
  }

  insertarParte(): Promise<number> {
    return new Promise((resolve, reject) => {
        const dataPartes = {
          NUM_SERVICIO: this.numServicio,
          FECHA: this.miFecha,
          DIRECCION: this.direccion,
          OBSERVACION: this.observacion,
          COD_CLAVE_DESPACHO: this.codClaveDespacho
        };

        this.apiService.addPartes(dataPartes).subscribe((response: any) => {
            const generatedId = response.ID_PARTE;
            resolve(generatedId); // Resuelve la promesa con el ID
        }, error => {
            // manejar error
            reject(error);
        });
    });
  }

  insertarAsistencias(): Promise<void> {
    return new Promise((resolve, reject) => {
      const promises = this.selectedBomberos.map(bomberoAntiguedad => {
        const dataAsistencia = {
          NUM_ANTIGUEDAD: bomberoAntiguedad,
          COD_CLAVE_DESPACHO: this.codClaveDespacho,
          ID_PARTE: this.idParte
        };
  
        console.log("ID_PARTE generado:", this.idParte);

        // Aquí, asumo que tienes un método en tu apiService llamado addAsistencia, 
        // que guarda cada asistencia en la tabla BOMBERO_PARTE.
        return this.apiService.addAsistenciaBomberos(dataAsistencia).toPromise();
      });
  
      // Ejecuta todas las promesas y resuelve una vez que todas hayan terminado
      Promise.all(promises).then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  insertarInvolucrados(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (this.rutInvolucrado !== this.initialRutInvolucrado || 
            this.nombreInvolucrado !== this.initialNombreInvolucrado ||
            this.primerApellidoInvolucrado !== this.initialPrimerApellidoInvolucrado ||
            this.segundoApellidoInvolucrado !== this.initialSegundoApellidoInvolucrado ||
            this.observacionInvolucrado !== this.initialObservacionInvolucrado) {
            
            const dataInvolucrados = {
              RUT_INVOLUCRADO: this.rutInvolucrado, 
              NOMBRE: this.nombreInvolucrado,
              P_APELLIDO: this.primerApellidoInvolucrado,
              S_APELLIDO: this.segundoApellidoInvolucrado,
              OBSERVACION: this.observacionInvolucrado  
            };

            this.apiService.addInvolucrados(dataInvolucrados).subscribe(response => {
                resolve(); 
            }, error => {
                reject(error);
            });
        } else {
            // Si los datos no han cambiado, simplemente resuelve la promesa sin hacer nada.
            resolve();
        }
    });
  }

  insertarUniDespacho(): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si los datos actuales difieren de los datos iniciales
        if (this.horaDespacho !== this.initialHoraDespacho &&
            this.horaLlegada !== this.initialHoraLlegada &&
            this.idParte !== this.initialIdParte &&
            this.idUnidad !== this.initialIdUnidad &&
            this.selectedMaquinista !== this.initialSelectedMaquinista) {

            const dataUniDespacho = {
                HORA_DESPACHO: this.horaDespacho,
                HORA_LLEGADA: this.horaLlegada,
                ID_PARTE: this.idParte,
                ID_UNIDAD: this.idUnidad,
                ID_MAQUINISTA: this.selectedMaquinista
            };

            this.apiService.addUnidadDespacho(dataUniDespacho).subscribe(response => {
                resolve();
            }, error => {
                reject(error);
            });
        } else {
            resolve(); // Si no hay cambios, simplemente resolver la promesa
        }
    });
  }

  insertarRecurso(): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si los datos actuales difieren de los datos iniciales
        if (this.codClaveDespacho !== this.initialCodClaveDespacho &&
            this.idParte !== this.initialIdParte &&
            this.codClaveRecurso !== this.initialCodClaveRecurso) {

            const dataRecurso = {
                COD_CLAVE_DESPACHO: this.codClaveDespacho,
                ID_PARTE: this.idParte,
                COD_CLAVE_RECURSO: this.codClaveRecurso
            };

            this.apiService.addRecurso(dataRecurso).subscribe(response => {
                resolve();
            }, error => {
                reject(error);
            });
        } else {
            resolve(); // Si no hay cambios, simplemente resolver la promesa
        }
    });
  }

  insertarApoyo(): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si los datos actuales difieren de los datos iniciales
        if (this.codClaveDespacho !== this.initialCodClaveDespacho &&
            this.idParte !== this.initialIdParte &&
            this.idUnidadExterna !== this.initialIdUnidadExterna) {

            const dataApoyo = {
                COD_CLAVE_DESPACHO: this.codClaveDespacho,
                ID_PARTE: this.idParte,
                ID_UNIDAD_EXTERNA: this.idUnidadExterna
            };

            this.apiService.addApoyo(dataApoyo).subscribe(response => {
                resolve();
            }, error => {
                reject(error);
            });
        } else {
            resolve(); // Si no hay cambios, simplemente resolver la promesa
        }
    });
  }

  insertarVehiculos(): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si los datos actuales difieren de los datos iniciales
        if (this.patente !== this.initialPatente ||
            this.marca !== this.initialMarca ||
            this.modelo !== this.initialModelo) {

            const dataVehiculos = {
                PATENTE: this.patente,
                MARCA: this.marca,
                MODELO: this.modelo
            };

            this.apiService.addVehiculos(dataVehiculos).subscribe(response => {
                resolve();
            }, error => {
                reject(error);
            });
        } else {
            resolve(); // Si no hay cambios, simplemente resolver la promesa
        }
    });
  }

  insertarMonitoreo(): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si los datos actuales son diferentes de los datos iniciales
        if (this.lel !== this.initialLel ||
            this.o2 !== this.initialO2 ||
            this.co !== this.initialCo ||
            this.h2s !== this.initialH2s) {

            const dataMonitoreo = {
                LEL: this.lel,
                O2: this.o2,
                CO: this.co,
                H2S: this.h2s
            };

            this.apiService.addMonitoreo(dataMonitoreo).subscribe(response => {
                resolve();
            }, error => {
                reject(error);
            });
        } else {
            resolve(); // Si no hay cambios, simplemente resolver la promesa
        }
    });
  }



}

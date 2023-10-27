// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parte } from '../interfaces/parte';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8001/api';

  constructor(private http: HttpClient) { }

  //// OBTENER DATOS

  // Obtener todos los Bomberos
  getAllBomberos() {
    return this.http.get(`${this.apiUrl}/bomberos`);
  }

  // Obtener todos los informes
  getInformes() {
    return this.http.get(`${this.apiUrl}/informes`);
  }

  // Obtener todos los partes
  getPartes() {
    return this.http.get(`${this.apiUrl}/partes`);
  }

  // Obtener todos los Claves despacho
  getClaveDespacho() {
    return this.http.get(`${this.apiUrl}/claves-despacho`);
  }

  // Obtener todos los recursos o otras instituciones
  getClaveRecurso() {
    return this.http.get(`${this.apiUrl}/clave-recurso`);
  }

  // Obtener todos los unidades o maquinas de despacho
  getUnidades() {
    return this.http.get(`${this.apiUrl}/maquinas`);
  }

  // Obtener todos los unidades de apoyo
  getAllUnidadExterna() {
    return this.http.get(`${this.apiUrl}/UnidadApoyo`);
  }

  // Obtener todos los maquinista
  getMaquinistas() {
    return this.http.get(`${this.apiUrl}/maquinistas`);
  }

  // ... otros métodos de obtener datos

  //// GUARDAR DATOS

  // Guardar datos de bomberos
  addBomberos(data: any) {
    return this.http.post(`${this.apiUrl}/bomberos`, data);
  }

  // Guardar asistencia de bomberos addAsistenciaBomberos
  addAsistenciaBomberos(data: any) {
    return this.http.post(`${this.apiUrl}/asistencia`, data);
  }

  // Guardar partes
  addPartes(data: any): Observable<Parte> {
    return this.http.post<Parte>(`${this.apiUrl}/partes`, data);
}

  // Guardar Involucrados
  addInvolucrados(data: any) {
    return this.http.post(`${this.apiUrl}/involucrados`, data);
  }

  // Guardar Unidad de despacho
  addUnidadDespacho(data: any) {
    return this.http.post(`${this.apiUrl}/unidad-despacho`, data);
  }

  // Guardar Recurso
  addRecurso(data: any) {
    return this.http.post(`${this.apiUrl}/recurso`, data);
  }

  // Guardar Apoyo
  addApoyo(data: any) {
    return this.http.post(`${this.apiUrl}/apoyo`, data);
  }

  // Guardar Vehiculos
  addVehiculos(data: any) {
    return this.http.post(`${this.apiUrl}/vehiculo`, data);
  }

  // Guardar Monitoreo
  addMonitoreo(data: any) {
    return this.http.post(`${this.apiUrl}/monitoreo`, data);
  }

  ///// todavia sin implementar

  // Guardar Licencias
  addLicencias(data: any) {
    return this.http.post(`${this.apiUrl}/licencia`, data);
  }

  // Guardar Suspenciones
  addSuspenciones(data: any) {
    return this.http.post(`${this.apiUrl}/suspension`, data);
  }

  // ... otros métodos para guardar datos

  // Modificar partes
  updateParte(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/partes/${id}`, data);
  }

  // Modificar bomberos
  updateBomberos(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/bomberos/${id}`, data);
  }

  // ... y así sucesivamente para los otros métodos

  //// DELETE 

  deleteBombero(id: number) {
    return this.http.delete(`${this.apiUrl}/bomberos/${id}`);
  }
}

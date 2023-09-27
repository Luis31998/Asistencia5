import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private userRole: string = ""; 

  constructor() { }

  setRole(role: string) {
    this.userRole = role;
    console.log('Rol establecido:', role); // Agregar registro
  }

  getRole(): string {
    console.log('Rol obtenido:', this.userRole); // Agregar registro
    return this.userRole;
  }
}




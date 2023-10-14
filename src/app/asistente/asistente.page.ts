import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.page.html',
  styleUrls: ['./asistente.page.scss'],
})
export class AsistentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

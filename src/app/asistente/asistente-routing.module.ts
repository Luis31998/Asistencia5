import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistentePage } from './asistente.page';
import { ParteComponent } from '../parte/parte.component';

const routes: Routes = [
  {
    path: '',
    component: AsistentePage,
    children:[
      {
        path: "uno",
        component: ParteComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistentePageRoutingModule {}

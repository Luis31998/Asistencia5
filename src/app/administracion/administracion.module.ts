import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministracionPageRoutingModule } from './administracion-routing.module';

import { AdministracionPage } from './administracion.page';
import { BomberoFormComponent } from '../bombero-form/bombero-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministracionPageRoutingModule
  ],
  declarations: [AdministracionPage, BomberoFormComponent]
})
export class AdministracionPageModule {}

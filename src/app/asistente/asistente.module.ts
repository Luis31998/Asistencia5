import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistentePageRoutingModule } from './asistente-routing.module';

import { AsistentePage } from './asistente.page';
import { ParteComponent } from '../parte/parte.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistentePageRoutingModule
  ],
  declarations: [AsistentePage, ParteComponent]
})
export class AsistentePageModule {}

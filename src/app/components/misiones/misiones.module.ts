import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionesRoutingModule } from './misiones-routing.module';
import { MisionesComponent } from './misiones.component';


@NgModule({
  declarations: [MisionesComponent],
  imports: [
    CommonModule,
    MisionesRoutingModule
  ]
})
export class MisionesModule { }

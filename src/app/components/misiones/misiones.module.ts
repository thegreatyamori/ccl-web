import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { LazyLoadImageModule } from "ng-lazyload-image";


import { MisionesRoutingModule } from './misiones-routing.module';
import { MisionesComponent } from './misiones.component';
import { TransculturalesComponent } from './transculturales/transculturales.component';
import { FilialesComponent } from './filiales/filiales.component';
import { CamposBlancosComponent } from './campos-blancos/campos-blancos.component';


@NgModule({
  declarations: [MisionesComponent, TransculturalesComponent, FilialesComponent, CamposBlancosComponent],
  imports: [
    CommonModule,
    FooterModule,
    MisionesRoutingModule,
    LazyLoadImageModule
  ]
})
export class MisionesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadesComponent } from './actividades.component';


@NgModule({
  declarations: [ActividadesComponent],
  imports: [CommonModule, FooterModule, ActividadesRoutingModule]
})
export class ActividadesModule {}

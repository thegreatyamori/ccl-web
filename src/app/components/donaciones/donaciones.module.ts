import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './donaciones.component';


@NgModule({
  declarations: [DonacionesComponent],
  imports: [CommonModule, FooterModule, DonacionesRoutingModule]
})
export class DonacionesModule {}

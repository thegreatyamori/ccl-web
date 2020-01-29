import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';

import { MisionesRoutingModule } from './misiones-routing.module';
import { MisionesComponent } from './misiones.component';


@NgModule({
  declarations: [MisionesComponent],
  imports: [CommonModule, FooterModule, MisionesRoutingModule]
})
export class MisionesModule {}

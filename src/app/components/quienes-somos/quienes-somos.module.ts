import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './quienes-somos.component';


@NgModule({
  declarations: [ QuienesSomosComponent ],
  imports: [
    NgbModule,
    CommonModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule { }

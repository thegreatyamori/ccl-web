import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuerpoPastoralRoutingModule } from './cuerpo-pastoral-routing.module';
import { CuerpoPastoralComponent } from './cuerpo-pastoral.component';


@NgModule({
  declarations: [CuerpoPastoralComponent],
  imports: [
    CommonModule,
    CuerpoPastoralRoutingModule
  ]
})
export class CuerpoPastoralModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConectateRoutingModule } from './conectate-routing.module';
import { ConectateComponent } from './conectate.component';


@NgModule({
  declarations: [ConectateComponent],
  imports: [
    CommonModule,
    ConectateRoutingModule
  ]
})
export class ConectateModule { }

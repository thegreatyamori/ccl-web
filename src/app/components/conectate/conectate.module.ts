import { NgModule } from '@angular/core';
import { NgbTooltipModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConectateRoutingModule } from './conectate-routing.module';
import { ConectateComponent } from './conectate.component';
import { TitleSectorDirective } from "src/app/directives/title-sector.directive";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ConectateComponent, TitleSectorDirective],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    FontAwesomeModule,
    NgbPaginationModule,
    ConectateRoutingModule
  ]
})
export class ConectateModule {}

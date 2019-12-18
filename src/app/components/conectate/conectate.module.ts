import { NgModule } from '@angular/core';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConectateRoutingModule } from './conectate-routing.module';
import { ConectateComponent } from './conectate.component';
import { SvgZoomDirective } from 'src/app/directives/svg-zoom.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ConectateComponent, SvgZoomDirective],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    FontAwesomeModule,
    ConectateRoutingModule,
  ]
})
export class ConectateModule {}

import { NgModule } from '@angular/core';
import { NgbTooltipModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../shared/pipe.module';
import { FooterModule } from '../shared/footer/footer.module';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../shared/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConectateRoutingModule } from './conectate-routing.module';
import { ConectateComponent } from './conectate.component';
import { TitleSectorDirective } from "src/app/directives/title-sector.directive";


@NgModule({
  declarations: [ConectateComponent, TitleSectorDirective],
  imports: [
    PipeModule,
    FormsModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    NgbTooltipModule,
    FontAwesomeModule,
    NgbPaginationModule,
    ConectateRoutingModule
  ]
})
export class ConectateModule {}

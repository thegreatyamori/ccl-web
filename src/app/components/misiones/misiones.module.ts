import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FooterModule } from "../shared/footer/footer.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { PipeModule } from '../shared/pipe.module';
import { LazyLoadImageModule } from "ng-lazyload-image";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../shared/directives.module';

import { MisionesRoutingModule } from "./misiones-routing.module";
import { MisionesComponent } from "./misiones.component";
import { DetailComponent } from './detail/detail.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    MisionesComponent,
    ModalComponent,
    DetailComponent
  ],
  imports: [
    NgbModule,
    PipeModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    MisionesRoutingModule
  ]
})
export class MisionesModule {}

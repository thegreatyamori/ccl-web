import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FooterModule } from "../shared/footer/footer.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { PipeModule } from '../shared/pipe.module';
import { LazyLoadImageModule } from "ng-lazyload-image";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MisionesRoutingModule } from "./misiones-routing.module";
import { MisionesComponent } from "./misiones.component";
import { TransculturalesComponent } from "./transculturales/transculturales.component";
import { FilialesComponent } from "./filiales/filiales.component";
import { CamposBlancosComponent } from "./campos-blancos/campos-blancos.component";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    MisionesComponent,
    TransculturalesComponent,
    FilialesComponent,
    CamposBlancosComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    PipeModule,
    CommonModule,
    FooterModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    MisionesRoutingModule
  ]
})
export class MisionesModule {}

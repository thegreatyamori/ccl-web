import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { PipeModule } from "../shared/pipe.module";

import { QuienesSomosRoutingModule } from "./quienes-somos-routing.module";
import { QuienesSomosComponent } from "./quienes-somos.component";

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [NgbModule, CommonModule, QuienesSomosRoutingModule, PipeModule]
})
export class QuienesSomosModule {}

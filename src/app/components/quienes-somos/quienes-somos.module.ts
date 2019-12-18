import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { QuienesSomosRoutingModule } from "./quienes-somos-routing.module";
import { QuienesSomosComponent } from "./quienes-somos.component";

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [NgbModule, CommonModule, QuienesSomosRoutingModule, SharedModule]
})
export class QuienesSomosModule {}

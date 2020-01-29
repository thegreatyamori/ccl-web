import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { PipeModule } from "../shared/pipe.module";
import { FooterModule } from "../shared/footer/footer.module";
import { DirectivesModule } from "../shared/directives.module";

import { QuienesSomosComponent } from "./quienes-somos.component";
import { QuienesSomosRoutingModule } from "./quienes-somos-routing.module";

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [
    NgbModule,
    PipeModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule {}

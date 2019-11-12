import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { QuienesSomosRoutingModule } from "./quienes-somos-routing.module";
import { QuienesSomosComponent } from "./quienes-somos.component";
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize-html.pipe';

@NgModule({
  declarations: [QuienesSomosComponent, SanitizeHtmlPipe ],
  imports: [NgbModule, CommonModule, QuienesSomosRoutingModule]
})
export class QuienesSomosModule {}

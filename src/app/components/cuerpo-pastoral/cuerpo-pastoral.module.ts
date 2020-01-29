import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterModule } from "../shared/footer/footer.module";

import { CuerpoPastoralRoutingModule } from "./cuerpo-pastoral-routing.module";
import { CuerpoPastoralComponent } from "./cuerpo-pastoral.component";
import { DirectivesModule } from "../shared/directives.module";

@NgModule({
  declarations: [CuerpoPastoralComponent],
  imports: [
    CommonModule,
    FooterModule,
    DirectivesModule,
    CuerpoPastoralRoutingModule
  ]
})
export class CuerpoPastoralModule {}

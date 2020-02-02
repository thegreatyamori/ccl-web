import { NgModule } from "@angular/core";
import { PipeModule } from '../shared/pipe.module';
import { CommonModule } from "@angular/common";
import { FooterModule } from "../shared/footer/footer.module";
import { DirectivesModule } from "../shared/directives.module";
import { NgxSpinnerModule } from 'ngx-spinner';

import { CuerpoPastoralRoutingModule } from "./cuerpo-pastoral-routing.module";
import { CuerpoPastoralComponent } from "./cuerpo-pastoral.component";

@NgModule({
  declarations: [CuerpoPastoralComponent],
  imports: [
    PipeModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    NgxSpinnerModule,
    CuerpoPastoralRoutingModule
  ]
})
export class CuerpoPastoralModule {}

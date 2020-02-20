import { NgModule } from "@angular/core";
import {
  NgbTooltipModule,
  NgbDropdownModule,
  NgbPaginationModule
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { PipeModule } from "../shared/pipe.module";
import { FooterModule } from "../shared/footer/footer.module";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "../shared/directives.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ConectateRoutingModule } from "./conectate-routing.module";
import { ConectateComponent } from "./conectate.component";
import { MapaComponent } from "./mapa/mapa.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { CardComponent } from "./card/card.component";
import { CardV2Component } from "./card-v2/card-v2.component";
import { HogaresBendicionComponent } from "./hogares-bendicion/hogares-bendicion.component";
import { FiltroComponent } from './filtro/filtro.component';
import { ListByWordComponent } from './list-by-word/list-by-word.component';
import { ListBySectorComponent } from './list-by-sector/list-by-sector.component';
// import { SwipeDirective } from './card-v2/swipe.directive';

@NgModule({
  declarations: [
    ConectateComponent,
    MapaComponent,
    BuscadorComponent,
    CardComponent,
    CardV2Component,
    HogaresBendicionComponent,
    FiltroComponent,
    ListByWordComponent,
    ListBySectorComponent,
    // SwipeDirective
  ],
  imports: [
    PipeModule,
    FormsModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    NgxSpinnerModule,
    NgbTooltipModule,
    NgbDropdownModule,
    FontAwesomeModule,
    NgbPaginationModule,
    ConectateRoutingModule
  ]
})
export class ConectateModule {}

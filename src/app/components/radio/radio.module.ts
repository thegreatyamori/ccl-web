import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarouselModule } from "ngx-owl-carousel-o";

import { RadioRoutingModule } from "./radio-routing.module";
import { RadioComponent } from "./radio.component";
import { FullComponent } from "./full/full.component";
import { SponsorSliderComponent } from './sponsor-slider/sponsor-slider.component';

@NgModule({
  declarations: [
    RadioComponent,
    FullComponent,
    SponsorSliderComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CarouselModule,
    FontAwesomeModule,
    RadioRoutingModule,
  ]
})
export class RadioModule {}

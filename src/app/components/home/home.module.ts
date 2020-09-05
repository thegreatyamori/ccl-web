import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from '../shared/footer/footer.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DirectivesModule } from '../shared/directives.module';
import { PipeModule } from '../shared/pipe.module';

import { HomeComponent } from './home.component';
import { ButtonsBarComponent } from './buttons-bar/buttons-bar.component';
import { SliderComponent } from './slider/slider.component';
import { TowDahComponent } from './tow-dah/tow-dah.component';
import { PastoresComponent } from './pastores/pastores.component';

@NgModule({
  declarations: [HomeComponent, ButtonsBarComponent, SliderComponent, TowDahComponent, PastoresComponent],
  imports: [
    NgbModule,
    PipeModule,
    FooterModule,
    CommonModule,
    CarouselModule,
    DirectivesModule,
    HttpClientModule,
    HomeRoutingModule,
    FontAwesomeModule,
    LazyLoadImageModule,
  ],
})
export class HomeModule {}

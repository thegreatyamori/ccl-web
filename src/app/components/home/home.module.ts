import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from '../shared/footer/footer.module';

import { HomeComponent } from './home.component';
import { ButtonsBarComponent } from './buttons-bar/buttons-bar.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { TowDahComponent } from './tow-dah/tow-dah.component';
import { PastoresComponent } from './pastores/pastores.component';
import { LazyImgDirective } from 'src/app/directives/lazy-img.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ButtonsBarComponent,
    HeroSliderComponent,
    TowDahComponent,
    LazyImgDirective,
    PastoresComponent,
  ],
  imports: [
    NgbModule,
    FooterModule,
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }

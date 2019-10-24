import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormGroup } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConectateComponent } from './components/conectate/conectate.component';
import { RadioComponent } from './components/radio/radio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapModalComponent } from './components/shared/footer/map-modal/map-modal.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonsBarComponent } from './components/home/buttons-bar/buttons-bar.component';
import { TowDahComponent } from './components/home/tow-dah/tow-dah.component';
import { HeroSliderComponent } from './components/home/hero-slider/hero-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadioComponent,
    HeaderComponent,
    FooterComponent,
    MapModalComponent,
    NotFoundComponent,
    ConectateComponent,
    ButtonsBarComponent,
    DonacionesComponent,
    ActividadesComponent,
    QuienesSomosComponent,
    TowDahComponent,
    HeroSliderComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

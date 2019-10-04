import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup } from "@angular/forms";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConectateComponent } from './components/conectate/conectate.component';
import { RadioComponent } from './components/radio/radio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapModalComponent } from './components/shared/footer/map/map.component';

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
    DonacionesComponent,
    ActividadesComponent,
    QuienesSomosComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

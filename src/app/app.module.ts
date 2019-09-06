import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup } from "@angular/forms";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConectateComponent } from './conectate/conectate.component';
import { RadioComponent } from './radio/radio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FooterComponent } from './shared/navbar/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConectateComponent,
    RadioComponent,
    QuienesSomosComponent,
    // NavbarComponent,
    // FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

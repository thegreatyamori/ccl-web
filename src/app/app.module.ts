import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './components/shared/shared.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WINDOW_PROVIDERS } from './services/window.service';
import { NAVIGATOR_PROVIDERS } from './services/navigator.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RedirectComponent],
  imports: [
    NgbModule,
    FormsModule,
    HomeModule,
    BrowserModule,
    CarouselModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
  ],
  providers: [
    Title,
    WINDOW_PROVIDERS,
    NAVIGATOR_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

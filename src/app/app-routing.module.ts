import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RadioComponent } from './radio/radio.component';
import { ConectateComponent } from './conectate/conectate.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',          component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'radio',         component: RadioComponent},
  {path: 'conectate',     component: ConectateComponent},
  {path: '**',           component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

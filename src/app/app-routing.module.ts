import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RadioComponent } from './components/radio/radio.component';
import { ConectateComponent } from './components/conectate/conectate.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',          component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'radio',         component: RadioComponent},
  {path: 'conectate',     component: ConectateComponent},
  {path: 'actividades',     component: ActividadesComponent},
  {path: 'donaciones',     component: DonacionesComponent},
  {path: '**',           component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'actividades', loadChildren: () => import('./components/actividades/actividades.module').then(m => m.ActividadesModule) },
  { path: 'conectate', loadChildren: () => import('./components/conectate/conectate.module').then(m => m.ConectateModule) },
  { path: 'donaciones', loadChildren: () => import('./components/donaciones/donaciones.module').then(m => m.DonacionesModule) },
  { path: 'quienes-somos', loadChildren: () => import('./components/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) },
  { path: 'radio', loadChildren: () => import('./components/radio/radio.module').then(m => m.RadioModule) },
  { path: 'donaciones', loadChildren: () => import('./components/donaciones/donaciones.module').then(m => m.DonacionesModule) },
  { path: '**', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) },
]

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

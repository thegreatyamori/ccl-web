import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "actividades",
    loadChildren: () =>
      import("./components/actividades/actividades.module").then(
        m => m.ActividadesModule
      )
  },
  {
    path: "conectate",
    loadChildren: () =>
      import("./components/conectate/conectate.module").then(
        m => m.ConectateModule
      )
  },
  {
    path: "cuerpo-pastoral",
    loadChildren: () =>
      import("./components/cuerpo-pastoral/cuerpo-pastoral.module").then(
        m => m.CuerpoPastoralModule
      )
  },
  {
    path: "donaciones",
    loadChildren: () =>
      import("./components/donaciones/donaciones.module").then(
        m => m.DonacionesModule
      )
  },
  {
    path: "misiones",
    loadChildren: () =>
      import("./components/misiones/misiones.module").then(
        m => m.MisionesModule
      )
  },
  {
    path: "quienes-somos",
    loadChildren: () =>
      import("./components/quienes-somos/quienes-somos.module").then(
        m => m.QuienesSomosModule
      )
  },
  {
    path: "radio",
    loadChildren: () =>
      import("./components/radio/radio.module").then(m => m.RadioModule)
  },
  {
    path: "404",
    loadChildren: () =>
      import("./components/not-found/not-found.module").then(
        m => m.NotFoundModule
      )
  },
  { path: "**", redirectTo: "/404" }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MisionesComponent } from "./misiones.component";
import { TransculturalesComponent } from "./transculturales/transculturales.component";
import { FilialesComponent } from "./filiales/filiales.component";
import { CamposBlancosComponent } from "./campos-blancos/campos-blancos.component";

const routes: Routes = [
  { path: "", component: MisionesComponent },
  {
    path: "transculturales",
    component: TransculturalesComponent
  },
  {
    path: "filiales",
    component: FilialesComponent
  },
  {
    path: "campos-blancos",
    component: CamposBlancosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionesRoutingModule {}

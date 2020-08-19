import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MisionesComponent } from "./misiones.component";
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: "", component: MisionesComponent },
  {
    path: ":name",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionesRoutingModule {}

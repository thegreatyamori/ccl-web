import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionesComponent } from './misiones.component';

const routes: Routes = [{ path: '', component: MisionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionesRoutingModule { }

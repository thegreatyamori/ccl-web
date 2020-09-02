import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuerpoPastoralComponent } from './cuerpo-pastoral.component';

const routes: Routes = [{ path: '', component: CuerpoPastoralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuerpoPastoralRoutingModule {}

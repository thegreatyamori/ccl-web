import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectateComponent } from './conectate.component';

const routes: Routes = [{ path: '', component: ConectateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConectateRoutingModule { }

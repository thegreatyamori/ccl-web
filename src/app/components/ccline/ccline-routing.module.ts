import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CclineComponent } from './ccline.component';

const routes: Routes = [
  {
    path: '',
    component: CclineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CclineRoutingModule {}

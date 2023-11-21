import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasuramentErrorPage } from './measurament-error.page';

const routes: Routes = [
  {
    path: '',
    component: MeasuramentErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasuramentErrorPageRoutingModule {}

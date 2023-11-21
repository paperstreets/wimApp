import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasuramentErrorPageRoutingModule } from './measurament-error-routing.module';

import { MeasuramentErrorPage } from './measurament-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasuramentErrorPageRoutingModule
  ],
  declarations: [MeasuramentErrorPage]
})
export class MeasuramentErrorPageModule {}

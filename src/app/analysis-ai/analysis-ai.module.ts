import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalysisAIPageRoutingModule } from './analysis-ai-routing.module';

import { AnalysisAIPage } from './analysis-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalysisAIPageRoutingModule
  ],
  declarations: [AnalysisAIPage]
})
export class AnalysisAIPageModule {}

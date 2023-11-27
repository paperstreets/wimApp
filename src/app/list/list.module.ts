import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { HttpClientModule } from '@angular/common/http'; // Додайте імпорт

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    HttpClientModule, // Додайте це
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
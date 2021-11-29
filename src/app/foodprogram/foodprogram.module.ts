import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodprogramPageRoutingModule } from './foodprogram-routing.module';

import { FoodprogramPage } from './foodprogram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodprogramPageRoutingModule
  ],
  declarations: [FoodprogramPage]
})
export class FoodprogramPageModule {}

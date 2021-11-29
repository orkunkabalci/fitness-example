import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyProgramPageRoutingModule } from './weekly-program-routing.module';

import { WeeklyProgramPage } from './weekly-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyProgramPageRoutingModule
  ],
  declarations: [WeeklyProgramPage]
})
export class WeeklyProgramPageModule {}

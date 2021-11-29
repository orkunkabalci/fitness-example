import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyProgramPage } from './weekly-program.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyProgramPageRoutingModule {}

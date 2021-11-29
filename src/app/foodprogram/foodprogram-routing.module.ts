import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodprogramPage } from './foodprogram.page';

const routes: Routes = [
  {
    path: '',
    component: FoodprogramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodprogramPageRoutingModule {}

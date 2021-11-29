import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('../workouts/workouts.module').then((m) => m.WorkoutsPageModule),
  },
  {
    path: 'foodprogram',
    loadChildren: () =>
      import('../foodprogram/foodprogram.module').then(
        (m) => m.FoodprogramPageModule
      ),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('../performance/performance.module').then(
        (m) => m.PerformancePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}

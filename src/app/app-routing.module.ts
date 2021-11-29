import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'branches',
    pathMatch: 'full',
  },
  {
    path: 'videos',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./videos/videos.module').then((m) => m.VideosPageModule),
      },
    ],
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./workouts/workouts.module').then((m) => m.WorkoutsPageModule),
  },
  {
    path: 'foodprogram',
    loadChildren: () =>
      import('./foodprogram/foodprogram.module').then(
        (m) => m.FoodprogramPageModule
      ),
  },
  {
    path: 'teacher',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./teacher/teacher.module').then((m) => m.TeacherPageModule),
      },
    ],
  },
  {
    path: 'branches',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./branches/branches.module').then(
            (m) => m.BranchesPageModule
          ),
      },

      {
        path: ':id',
        loadChildren: () =>
          import('./branches/branches.module').then(
            (m) => m.BranchesPageModule
          ),
      },
    ],
  },
  {
    path: 'teachers',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./teachers/teachers.module').then(
            (m) => m.TeachersPageModule
          ),
      },
    ],
  },
  {
    path: 'performance',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./performance/performance.module').then(
            (m) => m.PerformancePageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./performance/performance.module').then(
            (m) => m.PerformancePageModule
          ),
      },
    ],
  },
  {
    path: 'video',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./video/video.module').then((m) => m.VideoPageModule),
      },
    ],
  },
  {
    path: 'weeklyprogram',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./weekly-program/weekly-program.module').then(
            (m) => m.WeeklyProgramPageModule
          ),
      },
    ],
  },
  {
    path: 'weekly-program',
    loadChildren: () =>
      import('./weekly-program/weekly-program.module').then(
        (m) => m.WeeklyProgramPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

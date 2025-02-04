import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/layouts/admin-layout/admin-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/layouts/pages/summary-page/summary-page.component'),
        children: []
      },
      {
        path: 'projects',
        loadComponent: () => import('./modules/layouts/pages/projects-page/projects-page.component'),
        children: []
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

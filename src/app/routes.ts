import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

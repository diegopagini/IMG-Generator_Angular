import { inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthComponent } from '@pages/auth/auth.component';
import { UserService } from '@shared/services/user.service';

export const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [
      () =>
        inject(UserService).isAuthenticated()()
          ? true
          : inject(Router).navigate(['auth']),
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

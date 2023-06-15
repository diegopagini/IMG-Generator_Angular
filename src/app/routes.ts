import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '@shared/services/user.service';
import { environment } from 'src/environments/environment';

export const routes: Route[] = [
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
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID, {
                oneTapEnabled: false,
                prompt: 'select_account',
              }),
            },
          ],
        } as SocialAuthServiceConfig,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

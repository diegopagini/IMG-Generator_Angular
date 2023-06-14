import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { Route } from '@angular/router';
import { environment } from 'src/environments/environment';

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

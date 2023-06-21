import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private readonly _oAuthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth(): void {
    this._oAuthService.configure({
      clientId: environment.GITHUB_CLIEND_ID,
      loginUrl: 'https://github.com/login/oauth/authorize',
      redirectUri: 'http://localhost:4200',
      responseType: 'code',
      scope: 'openid profile email offline_access api',
      showDebugInformation: true,
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      userinfoEndpoint: 'https://api.github.com/user',
    });

    this._oAuthService.tokenValidationHandler = new JwksValidationHandler();
  }

  login() {
    this._oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  logout() {
    this._oAuthService.logOut();
  }
}

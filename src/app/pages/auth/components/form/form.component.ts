import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, SocialLoginModule, GoogleSigninButtonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  private readonly _authService = inject(SocialAuthService);

  onLogin(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

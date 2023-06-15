import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialLoginModule,
  SocialUser,
} from '@abacritt/angularx-social-login';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@shared/services/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SocialLoginModule, GoogleSigninButtonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy {
  private readonly _authService = inject(SocialAuthService);
  private readonly _router = inject(Router);
  private readonly _userService = inject(UserService);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this._authService.authState
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: SocialUser) => {
        if (user.id) {
          this._userService.setUser(user);
          this._router.navigate(['/dashboard']);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { SocialUser } from '@abacritt/angularx-social-login';
import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: WritableSignal<SocialUser | null> = signal(null);

  setUser(user: SocialUser): void {
    this.user.set(user);
  }

  getUser(): Signal<SocialUser> {
    return this.user as Signal<SocialUser>;
  }

  isAuthenticated(): Signal<boolean> {
    return computed(() => (this.user()?.id ? true : false));
  }
}

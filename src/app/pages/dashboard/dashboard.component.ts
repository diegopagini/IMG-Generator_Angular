import { SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { UserService } from '@shared/services/user.service';

import { DownloadImageComponent } from './components/download-image/download-image.component';
import { InputImageComponent } from './components/input-image/input-image.component';
import { Propmt } from './interfaces/prompt.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SocialLoginModule,
    DownloadImageComponent,
    InputImageComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private readonly _userService = inject(UserService);
  user: Signal<SocialUser>;

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

  onSubmit(value: Propmt): void {
    console.log(value);
  }
}

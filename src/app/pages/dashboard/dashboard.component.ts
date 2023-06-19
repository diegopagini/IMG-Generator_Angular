import { SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from '@shared/services/user.service';
import { finalize, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DownloadImageComponent } from './components/download-image/download-image.component';
import { InputImageComponent } from './components/input-image/input-image.component';
import { Propmt } from './interfaces/prompt.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DownloadImageComponent,
    InputImageComponent,
    MatProgressSpinnerModule,
    SocialLoginModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private readonly _userService = inject(UserService);
  private readonly _http = inject(HttpClient);
  user: Signal<SocialUser>;
  images$: Observable<string[]>;
  isLoading = signal(false);

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

  onSubmit(prompt: Propmt): void {
    this.isLoading.set(true);

    this.images$ = this._http
      .post<{ data: { url: string }[] }>(
        'https://api.openai.com/v1/images/generations',
        prompt,
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${environment.OPEN_AI_API_KEY}`),
        }
      )
      .pipe(
        map(({ data }) => data.map((value) => value.url)),
        finalize(() => this.isLoading.set(false))
      );
  }
}

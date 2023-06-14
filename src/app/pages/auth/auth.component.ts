import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}

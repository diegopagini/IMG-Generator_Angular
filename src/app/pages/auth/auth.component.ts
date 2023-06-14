import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormComponent, ImageComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}

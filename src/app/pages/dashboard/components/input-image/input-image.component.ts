import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputImageComponent {

}

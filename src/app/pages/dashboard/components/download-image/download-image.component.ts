import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadImageComponent {
  @Input({ required: true }) image: string;
}

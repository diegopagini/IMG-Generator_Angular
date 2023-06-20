import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-download-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadImageComponent {
  @ViewChild('img') img: HTMLImageElement;
  @Input({ required: true }) image: string;

  onDownload(): void {
    // Temporal link.
    const link = document.createElement('a');
    link.href = this.img.src;
    link.download = 'imagen.png';
    // Click link.
    link.click();
  }
}

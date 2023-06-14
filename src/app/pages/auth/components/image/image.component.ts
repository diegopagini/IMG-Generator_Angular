import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Format } from '@pages/dashboard/interfaces/prompt.interface';

@Component({
  selector: 'app-input-image',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputImageComponent implements OnInit {
  @Output() submit = new EventEmitter();
  private readonly _formBuilder = inject(FormBuilder);
  form: FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      prompt: [null, [Validators.required, Validators.minLength(6)]],
      quantity: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      format: [null, [Validators.required]],
    });
  }

  setOption(value: Format): void {
    this.form.get('format')?.setValue(value);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }
}

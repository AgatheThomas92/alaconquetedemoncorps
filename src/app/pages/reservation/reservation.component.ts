import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-reservation',
  imports: [ReactiveFormsModule, BannerComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class Reservation {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  readonly sending = signal(false);
  readonly sent = signal(false);
  readonly error = signal(false);

  readonly form = this.fb.nonNullable.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    objet: ['', Validators.required],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.sent.set(false);
    this.error.set(false);

    this.http.post('https://formspree.io/f/xxxxxxxx', this.form.getRawValue()).subscribe({
      next: () => {
        this.sending.set(false);
        this.sent.set(true);
        this.form.reset();
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      },
    });
  }
}

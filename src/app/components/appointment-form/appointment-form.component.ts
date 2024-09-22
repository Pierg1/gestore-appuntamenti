import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ], // Importa i moduli necessari
})
export class AppointmentFormComponent {
  appointmentForm = this.fb.group({
    dateTime: [''],
    customer: [''],
    address: [''],
    city: [''],
    cost: [''],
  });

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value, 'form value');
      this.appointmentService
        .createAppointment(this.appointmentForm.value)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}

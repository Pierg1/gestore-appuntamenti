import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { AppointmentService } from '../../services/appointment.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    RouterLink,
  ],
})
export class AppointmentsListComponent {
  appointments: any[] = [];
  displayedColumns: string[] = [
    'dateTime',
    'customer',
    'address',
    'city',
    'cost',
    'actions',
  ];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }

  updateAppointment(id: number): void {
    console.log(id);
    //navigate to the edit page
    this.router.navigate(['/edit-appointment', id]);
  }
}

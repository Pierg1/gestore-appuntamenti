import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { AppointmentService } from '../../services/appointment.service';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatFormFieldModule,
    MatInputModule,
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

  dataSource = new MatTableDataSource<any>([]); // Usa MatTableDataSource

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
      this.dataSource = new MatTableDataSource<any>(this.appointments); // Aggiorna la sorgente dei
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Applica il filtro
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

  goHome() {
    this.router.navigate(['/']); // Cambia il percorso se necessario
  }
}

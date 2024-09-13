import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAppointment(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(this.apiUrl, appointment);
  }

  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${appointment.id}`, appointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

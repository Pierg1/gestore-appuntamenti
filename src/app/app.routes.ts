import { Routes } from '@angular/router';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';

export const routes: Routes = [
  { path: '', component: AppointmentsListComponent },
  { path: 'new-appointment', component: AppointmentFormComponent },
  { path: 'edit-appointment/:id', component: AppointmentEditComponent },
  { path: '**', redirectTo: '' },
];

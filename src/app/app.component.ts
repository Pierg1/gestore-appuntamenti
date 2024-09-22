import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, HttpClientModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gestore-appuntamenti';

  constructor(private router: Router) {}

  newAppointment(): void {
    this.router.navigate(['/new-appointment']);
  }
}

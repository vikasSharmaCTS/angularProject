import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-upcoming-appointments',
  imports: [CommonModule],
  templateUrl: './upcoming-appointments.html',
  styleUrl: './upcoming-appointments.css'
})
export class UpcomingAppointments {
appointments=[
 { doctor:'Dr.Paal',speciality:'Cardiology',date:'2025-09-10',status:'confirmed'},
 {doctor:'Dr.vinod',speciality:'Neurology',date:'2025-09-10',status:'confirmed'}
]
}

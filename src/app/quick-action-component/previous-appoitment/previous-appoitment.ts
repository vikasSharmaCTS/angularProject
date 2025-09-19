import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-previous-appoitment',
  imports: [CommonModule],
  templateUrl: './previous-appoitment.html',
  styleUrl: './previous-appoitment.css'
})
export class PreviousAppoitment {
prevAppointments=[
 { doctor:'Dr.Paal',speciality:'Cardiology',date:'2025-09-10',time:'12-00-00' },
 {doctor:'Dr.Paal',speciality:'Cardiology',date:'2025-09-10',time:'3:30:00'},
{doctor:'Dr.Paal',speciality:'Cardiology',date:'2025-09-10',time:'3:30:00'}
 
]
}

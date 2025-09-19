import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  imports: [FormsModule],
  templateUrl: './prescription.html',
  styleUrl: './prescription.css'
})
export class Prescription {
  name: string = "";
  readonly patientId: string = "";
  reason: string = "";
  prescriptions: string = "";

}

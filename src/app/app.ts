import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { QuickActionComponent } from './quick-action-component/quick-action-component';
import { UpcomingAppointments } from './upcoming-appointments/upcoming-appointments';
import { ManageAvailability } from './doctorPortal/slot-availability-components/manage-availability/manage-availability';
import { CreateSlot } from './doctorPortal/slot-availability-components/create-slot/create-slot';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,QuickActionComponent,UpcomingAppointments, ManageAvailability, CreateSlot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 

}


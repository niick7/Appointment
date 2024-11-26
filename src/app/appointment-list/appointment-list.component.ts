import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAppointmentTitle: String = '';
  newAppontmentDate: Date = new Date();
  appointments: Appointment[] = [];
  addAppointment() {
    console.log(this.newAppointmentTitle + ' ' + this.newAppontmentDate);
  }
}
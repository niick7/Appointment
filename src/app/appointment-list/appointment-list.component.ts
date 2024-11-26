import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppontmentDate: Date = new Date();
  appointments: Appointment[] = [];
  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppontmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppontmentDate,
      };

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppontmentDate = new Date();
    }
  }
}

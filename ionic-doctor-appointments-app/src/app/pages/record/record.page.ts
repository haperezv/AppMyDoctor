// src/app/pages/record/record.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppointmentService } from '../../services/doctor/appointment.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  appointments: any[] = [];

  constructor(
    private navCtrl: NavController,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.loadAppointments();
  }

  async loadAppointments() {
    try {
      this.appointments = await this.appointmentService.getAppointments().toPromise();
    } catch (error) {
      console.error('Error cargando citas:', error);
    }
  }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}

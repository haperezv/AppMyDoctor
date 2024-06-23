import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AppointmentService } from '../../services/doctor/appointment.service';
import { Doctor } from '../../models/doctor.model'; // Asegúrate de importar el modelo Doctor

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.page.html',
  styleUrls: ['./schedule-appointment.page.scss'],
})
export class ScheduleAppointmentPage implements OnInit {

  doctors: Doctor[] = [];
  selectedDoctor: Doctor;
  selectedDate: string;
  selectedTime: string;
  availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];
  isModalOpen = false;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private appointmentService: AppointmentService,
    private alertController: AlertController // Importar AlertController
  ) { }

  ngOnInit() {
    this.loadDoctors();
  }

  async loadDoctors() {
    try {
      this.doctors = await this.appointmentService.getDoctors().toPromise();
    } catch (error) {
      console.error('Error cargando doctores:', error);
    }
  }

  close() {
    this.navCtrl.navigateBack('/home');
  }

  async confirmAppointment() {
    if (this.selectedDoctor && this.selectedDate && this.selectedTime) {
      console.log('Cita confirmada con', this.selectedDoctor.name, 'el', this.selectedDate, 'a las', this.selectedTime);
      try {
        const appointment = {
          doctorId: this.selectedDoctor._id,
          date: this.selectedDate,
          time: this.selectedTime
        };
        await this.appointmentService.createAppointment(appointment).toPromise();
        this.showConfirmationAlert();
      } catch (error) {
        console.error('Error cerrando modal:', error);
      }
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Cita confirmada',
      message: `Cita confirmada con ${this.selectedDoctor.name} el ${this.selectedDate} a las ${this.selectedTime}`,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.close();
        }
      }]
    });

    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.page.html',
  styleUrls: ['./schedule-appointment.page.scss'],
})
export class ScheduleAppointmentPage implements OnInit {

  doctors = [
    { name: 'Dr. John Doe' },
    { name: 'Dr. Jane Smith' },
    { name: 'Dr. Alan C. Braverman' }
  ];

  selectedDoctor: any;
  selectedDate: string;
  selectedTime: string;

  availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

  isModalOpen = false;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  close() {
    this.navCtrl.navigateBack('/home');
  }

  async confirmAppointment() {
    if (this.selectedDoctor && this.selectedDate && this.selectedTime) {
      console.log('Cita confirmada con', this.selectedDoctor.name, 'el', this.selectedDate, 'a las', this.selectedTime);
      try {
        await this.modalController.dismiss({
          doctor: this.selectedDoctor,
          date: this.selectedDate,
          time: this.selectedTime
        });
        this.isModalOpen = false;
        this.navCtrl.navigateBack('/home');
      } catch (error) {
        console.error('Error closing modal:', error);
      }
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
}
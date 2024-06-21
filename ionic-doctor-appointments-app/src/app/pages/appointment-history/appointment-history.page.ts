import { Component, OnInit } from '@angular/core';
import { ModalController, NavController  } from '@ionic/angular';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.page.html',
  styleUrls: ['./appointment-history.page.scss'],
})
export class AppointmentHistoryPage implements OnInit {

  appointments = [
    {
      date: '2024-06-10',
      time: '09:00 AM',
      specialization: 'Cardiología',
      doctor: 'Dr. John Doe'
    },
    {
      date: '2024-06-12',
      time: '10:00 AM',
      specialization: 'Neurología',
      doctor: 'Dr. Jane Smith'
    },
    {
      date: '2024-06-15',
      time: '11:00 AM',
      specialization: 'Dermatología',
      doctor: 'Dr. Alan C. Braverman'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './../profile/profile.page';
import { DoctorService } from '../../services/doctor/doctor.service'; 
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
  };

  doctors: Doctor[] = [];

  login = [
    {
      name: 'Login',
      bkColor: '#008aff',
      color: 'white',
      routerLink: '/login'
    }
  ];

  categories = [
    {
      name: 'Programar Cita',
      bkColor: '#008aff',
      color: 'white',
      icon: 'calendar',
      routerLink: '/schedule-appointment'
    },
    {
      name: 'Citas Programadas',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'clipboard',
      routerLink: '/record'
    },
    {
      name: 'Mi Historial',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'document-text',
      routerLink: '/appointment-history'
    }
  ];

  constructor(
    private modalController: ModalController,
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors', error);
      }
    );
  }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage,
    });
    await modal.present();
  }
}


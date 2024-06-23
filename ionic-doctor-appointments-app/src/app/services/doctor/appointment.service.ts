// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/doctor.model'; // Importa el modelo Doctor

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private doctorsUrl = 'http://localhost:3000/api/doctors'; // URL para obtener los doctores
  private appointmentsUrl = 'http://localhost:3000/api/appointments'; // URL para crear y obtener citas

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsUrl);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(this.appointmentsUrl, appointment);
  }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.appointmentsUrl);
  }
}

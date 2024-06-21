import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Doctor } from '../../models/doctor.model'; 

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:3000/api/doctors'; // URL de tu API para obtener los doctores

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }
}

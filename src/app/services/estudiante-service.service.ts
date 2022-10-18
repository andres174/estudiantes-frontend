import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  url:string = "https://estudiantes-sexto.herokuapp.com/"

  constructor(private http:HttpClient) { }

  
}

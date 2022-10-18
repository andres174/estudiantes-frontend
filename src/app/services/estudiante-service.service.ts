import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  url:string = "https://estudiantes-sexto.herokuapp.com/"

  constructor(private http:HttpClient) { }

  registerStudent(form:any)
  {
    let dir= this.url+"api/students";
    return this.http.post<any>(dir,form);
  }

  getStudent(){
    let dir= this.url+"api/students";
    return this.http.get<any>(dir);
    
  }
}

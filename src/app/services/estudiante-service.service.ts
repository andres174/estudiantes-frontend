import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  /* url:string = "https://estudiantes-sexto.herokuapp.com/" */
  url:string = "http://localhost:8080/student"

  constructor(private http:HttpClient) { }

  registerStudent(form:any)
  {
    /* let dir= this.url+"api/students"; */
    let dir= this.url;
    let auxForm = JSON.parse(JSON.stringify(form));
    console.log(auxForm);
    return this.http.post<any>(dir, auxForm);
  }

  getStudent(){
    /* let dir= this.url+"api/students"; */
    let dir= this.url
    return this.http.get<any>(dir);
    
  }

  findStudent(id:number){
    /* let dir= this.url+"api/students/" + id; */
    let dir= this.url + id;
    return this.http.get<any>(dir)
  }
  /* getJava(){
    let dir = this.urlJava;
    return this.http.get<any>(dir);
  } */
}

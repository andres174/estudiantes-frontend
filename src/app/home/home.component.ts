import { EstudianteServiceService } from './../services/estudiante-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students:any = [];

  constructor(private studentApi:EstudianteServiceService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentApi.getStudent().subscribe(res=>this.students=res);
  }

  
}

import { EstudianteServiceService } from './../services/estudiante-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students:any = [];
  isFull:boolean = true;
  

  constructor(private studentApi:EstudianteServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentApi.getStudent().subscribe({   
      next:(s)=>{
        this.students=s;
      },
      error:(e)=>{
        console.log(e);
      }
   });

   /* if (this.students == []){
    this.isFull = false;
    }else {
      this.isFull = true;
    } */
    

    []
  }

  /* cambio(){
    this.router.navigate
  } */
  

}

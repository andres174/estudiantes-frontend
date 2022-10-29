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
  

  constructor(private studentApi:EstudianteServiceService, private router:Router) { }

  ngOnInit(): void {
    /* this.getJ(); */
    this.getStudents();
  }

  getStudents(){
    this.studentApi.getStudent().subscribe(res=>this.students=res);
  }
  
  /* nota(id:number){
    this.router.navigate(['grades/'+ id ]);
  } */

  /* getJ(){
    this.studentApi.getJava().subscribe({
      next:(s)=>{
        console.log(s);
        
      },
      error: (e)=>{
        console.log(e);
      }
    })
  } */

}

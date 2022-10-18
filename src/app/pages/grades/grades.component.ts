import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EstudianteServiceService } from 'src/app/services/estudiante-service.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  student:any;
  id: number = 0;
  private sub: any;
  public form = new FormGroup({
    nota1: new FormControl('',Validators.required),
    nota2: new FormControl('',Validators.required),
    nota3: new FormControl('',Validators.required),
    nota4: new FormControl('',Validators.required),
    
    
  })

  constructor(private router:ActivatedRoute, private studentApi:EstudianteServiceService) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = + params['id'];
   });
   this.findStudent();
  }

  findStudent(){
    this.studentApi.findStudent(this.id).subscribe(res=>console.log(res)/* this.student=res */);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { EstudianteServiceService } from 'src/app/services/estudiante-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    dni: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  })

  constructor(private studentApi:EstudianteServiceService) { }

  ngOnInit(): void {
  }

  registro(form:any){
    this.studentApi.registerStudent(form).subscribe(data=>(console.log(data)));
  }

}

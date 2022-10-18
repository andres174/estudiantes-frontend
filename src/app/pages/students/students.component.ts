import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
  }

  registro(form:any){
    console.log(form)
  }

}

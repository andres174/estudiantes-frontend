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

  calculated:boolean = false;
  prom: number = 0;

  public form = new FormGroup({
    name: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    dni: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    n1: new FormControl('',Validators.required),
    n2: new FormControl('',Validators.required),
    n3: new FormControl('',Validators.required),
    n4: new FormControl('',Validators.required),
    prom: new FormControl('',Validators.required)
  })

  constructor(private studentApi:EstudianteServiceService) { }

  ngOnInit(): void {
  }

  registro(form:any){
    this.studentApi.registerStudent(form).subscribe(data=>(console.log(data)));

    this.form.reset();
    this.calculated = false;
  }

  calcular(){
    if(this.form.value.n1 == null){
      this.form.value.n1 = 0
    }
    if(this.form.value.n2 == null){
      this.form.value.n2 = 0
    }
    if(this.form.value.n3 == null){
      this.form.value.n3 = 0
    }
    if(this.form.value.n4 == null){
      this.form.value.n4 = 0
    }

    let n1, n2, n3, n4;
    n1 = parseInt(this.form.value.n1);
    n2 = parseInt(this.form.value.n2);
    n3 = parseInt(this.form.value.n3);
    n4 = parseInt(this.form.value.n4);

    this.prom = (n1+n2+n3+n4)/4;
    this.form.value.prom = this.prom;
    console.log(this.prom);
    this.calculated = true

  
  }

}

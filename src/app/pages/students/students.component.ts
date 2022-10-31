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

  public form!: FormGroup;

  constructor(private studentApi:EstudianteServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      email: ['', [Validators.required]],
      n1: ['', [Validators.required]],
      n2: ['', [Validators.required]],
      n3: ['', [Validators.required]],
      n4: ['', [Validators.required]],
      prom: new FormControl()
    })
  }

  registro(_form:any){

    if (_form.valid) {
      this.studentApi.registerStudent(_form).subscribe(data=>(console.log(data)));

      this.form.reset();
      this.calculated = false;
    } else {
      console.log("Formulario inválido.")
      this.calculated = false;
    }
    
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

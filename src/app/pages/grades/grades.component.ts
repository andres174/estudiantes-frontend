import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  public form = new FormGroup({
    nota1: new FormControl('',Validators.required),
    nota2: new FormControl('',Validators.required),
    nota3: new FormControl('',Validators.required),
    nota4: new FormControl('',Validators.required),
    
    
  })

  constructor() { }

  ngOnInit(): void {
  }

}

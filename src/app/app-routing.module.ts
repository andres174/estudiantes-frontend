import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GradesComponent } from './pages/grades/grades.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'students', component: StudentsComponent
  },
  {
    path: 'grades/:id', component: GradesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

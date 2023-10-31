import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { EducationalComponent } from './educational/educational.component';
import { HealthComponent } from './health/health.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EventExampleComponent } from './event-example/event-example.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServicesComponent},
  {path:'education',component:EducationalComponent},
  {path:'health',component:HealthComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'employeelist/:id',component:ViewEmployeeComponent},
  {path:'event',component:EventExampleComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

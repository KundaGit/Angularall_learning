import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { PreviewphotoComponent } from './previewphoto/previewphoto.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from 'src/Model/Employee.service';
import { GenderPipePipe } from './gender-pipe.pipe';
import { ChangeDirective } from './change.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { EducationalComponent } from './educational/educational.component';
import { HealthComponent } from './health/health.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
// import { Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { EventExampleComponent } from './event-example/event-example.component';
import {MatStepperModule} from '@angular/material/stepper';


  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EditComponent,
    PreviewphotoComponent,
    DynamicValidationComponent,
    EmployeelistComponent,
    GenderPipePipe,
    ChangeDirective,
    PageNotFoundComponent,
    ServicesComponent,
    EducationalComponent,
    HealthComponent,
    ViewEmployeeComponent,
    EventExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
    
    
    
  ],
  providers: [EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

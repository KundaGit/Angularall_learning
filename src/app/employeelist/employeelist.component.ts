import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/Model/Employee.model';
import { EmployeeService } from 'src/Model/Employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  
})
export class EmployeelistComponent {
constructor(private employeeService:EmployeeService){}
  standalone!: true;
employee:any=[];

displayedColumns: string[] = ['id','name', 'username', 'email','phone'];
dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
@ViewChild(MatPaginator)matPaginator!:MatPaginator
@ViewChild(MatSort)matsort!:MatSort
 
filterText=''
ngOnInit():void{
this.employeeService.GetAllEmployees().subscribe(
  (productData)=>{
    this.employee=productData;
    this.dataSource=new MatTableDataSource<any>(this.employee)
  if(this.matPaginator){
    this.dataSource.paginator=this.matPaginator
  }

  if(this.matsort){
    this.dataSource.sort=this.matsort
  }
  })

}
filterData(){
  this.dataSource.filter=this.filterText.trim().toLowerCase()
}
}

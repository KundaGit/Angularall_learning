import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/Model/Employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  Id: string | undefined | null
  user:any={
    name:'',
    username:''
  }
  constructor(private readonly employeeService: EmployeeService,
    private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.Id = params.get('id');
        if (this.Id) {
          this.employeeService.GetAllEmployee(this.Id).subscribe(
            (employeeData) => {
              this.user=employeeData
            })
        }
      }
    )
  }

}

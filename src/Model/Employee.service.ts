import { Injectable } from "@angular/core";
import { Employee } from "./Employee.model";
import { Observable } from "rxjs";
import{HttpClient} from '@angular/common/http'
@Injectable()
export class EmployeeService {
constructor(private httpclient:HttpClient){}
    private listEmployees: Employee[] = [{
        id: 2,
        name: 'Manish Kumar',
        gender: 'male',
        email: 'manish@gmail.com',
        phoneNumber: '33434332',
        dateOfBirth: new Date('12/2/2009'),
        department: 'cse',
        isActive: false,
        employeePhoto: '/assets/images/img2.jpg'

    },
    {
        id: 2,
        name: 'Kundan Kumar',
        gender: 'male',
        email: 'kundan@gmail.com',
        phoneNumber: '2345654334',
        dateOfBirth: new Date('12/2/2009'),
        department: 'ECE',
        isActive: false,
        employeePhoto: '/assets/images/img4.jpg'

    }

    ];
    GetAllEmployees():Observable<any>{
         return this.httpclient.get('https://jsonplaceholder.typicode.com/users')
    }
    GetAllEmployee(Id:string):Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/users/'+Id)
   }
    
}
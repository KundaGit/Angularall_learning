import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-routing';
//   data=
//   {
//     name:"kkkr",
//     age:23
//   }
//   date=new Date();

//   Persons=[{
//     id:1,
//     name:'kundan',
//     gender:0
//   },
//   {
//     id:2,
//     name:'Anjali',
//     gender:1
//   },
//   {
//     id:3,
//     name:'Sonam',
//     gender:0
//   },
//   {
//     id:4,
//     name:'Lalita',
//     gender:1
//   }
// 



method(first:any,stepper:any){
first.completed=true;
stepper.next()
}

method2(second:any,stepper:any){
  second.completed=true;
stepper.next()
}

sData:any;
scheduleData:any
  service: any;

ngOnInit()
{
  this.sData=this.service.getScheduledData();
  this.scheduleData=this.sData.default.data
}}

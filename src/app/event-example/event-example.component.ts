import { Component } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css']
})
export class EventExampleComponent {
  name:string=''
  constructor(){}
  sendData(event:Event,name:string){
console.log(event)
console.log("Input value  is "+name)
  }
  
}

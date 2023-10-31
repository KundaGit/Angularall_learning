import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
userId:any=''
  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    this.userId=this.route.snapshot.paramMap.get('id')
  }

}

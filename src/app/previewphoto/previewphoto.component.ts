import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-previewphoto',
  templateUrl: './previewphoto.component.html',
  styleUrls: ['./previewphoto.component.css']
})
export class PreviewphotoComponent {
photoPath:string='';
showPreview=false;

constructor(){

}
CheckPreview(){
  this.showPreview=!this.showPreview
}

ngOninIt():void{

}
  SendData(){

  }

}

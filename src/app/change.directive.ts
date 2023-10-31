import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color='Red'
   }

}

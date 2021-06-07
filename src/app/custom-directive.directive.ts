import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(myElement:ElementRef) {
    // console.log(el);
    myElement.nativeElement.style.cssText="background-color:yellow;width:700px;text-align:center;margin:auto;box-shadow:2px 2px 10px 1px black;border-radius:15px;padding:5px 7px 10px 7px"
    myElement.nativeElement.style.color="blue"
   }

}

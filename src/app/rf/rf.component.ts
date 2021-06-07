import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emptynotaccess } from './rf.emptynotaccess'

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  rform:any=FormGroup
    
  
  constructor() { }

  ngOnInit(): void {
    this.rform= new FormGroup({
      un:new FormControl('',[Validators.required,Validators.minLength(3),emptynotaccess.cannotContainSpace]),
      pw:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[A-Z]{1,5}[a-z]{1,7}[0-9]{3,4}[@#$%]{2,4}')])
    })
  }
  get user(){
return this.rform.get('un')
  }

  get pw(){
    return this.rform.get("pw")
  }

  // submit(a:any){
  //   console.log(a.value);
  // }

}

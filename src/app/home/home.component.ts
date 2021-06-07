import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   
  books=[
    {
        Book:"Flowers on the Path",
        Author:"Sadhguru's",
        pages: 192,
        Review:"Good readable book",
        Price:105+"/-"
    },
    {
          Book:"Life Without Limits",
          Author:"Nick Vujicic",
          pages: 288,
          Review:"Its really inspirational book",
          Price:384+"/-"
      },{
          Book:"Indomitable spirit",
          Author:"A.P.J Abdul Kalam",
          pages: 264,
          Review:"Good inspirational book",
          Price:300+"/-"
      },{
          Book:"Winners Never Cheat",
          Author:"Pan Macmillan",
          pages: 224,
          Review:"Good readable book",
          Price:346+"/-"
        },{
          Book:"The power wish",
          Author:"Ebury Publishing",
          pages: 288,
          Review:"Good readable book",
          Price:515+"/-"
        },{
          Book:"Triumph of Togetherness",
          Author:"Tina Rajan",
          pages: 83,
          Review:"Awesome book",
          Price:349+"/-"
        },{
          Book:"The Winning way 2.0",
          Author:"Anita Bhogle and Harsha Bhogle",
          pages: 304,
          Review:"Well structured book",
          Price:315+"/-"
        },{
          Book:"Living the 7 Habits",
          Author:"Stephen Covey",
          pages: 336,
          Review:"Nice book to read",
          Price:461+"/-"
        },{
          Book:"Pathways to greatness",
          Author:"A.P.J Abdul Kalam",
          pages: 164,
          Review:"Good readable book",
          Price:200+"/-"
          },{
            Book:"My Journey",
            Author:"A.P.J Abdul Kalam",
            pages: 132,
            Review:"Great story,truly inspiring book",
            Price:129+"/-"
        }
  ]
  ngOnInit(): void {
  }
  remBook(book:any){
     let i=this.books.indexOf(book);
     this.books.splice(i,1)
  }
  // addBook(){
  //   let b:any= []
  //   for (const book of this.books) {
  //    book.Book=b
  //   }  
  //   document.getElementById("bb").innerHTML=b   
  // }

}


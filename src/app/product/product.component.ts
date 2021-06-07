import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products=[
  {
       SlNo:"01",
      name:"OPPO F19",
      image:"https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/17290-297-1.jpg",
      price:"21,499/-",
      review:"Good Quality product"
  },
  {
      SlNo:"02",
      name:"VIVO V17",
      image:"https://static.toiimg.com/photo/73078527.cms",
      price:"22,990/-",
      review:"Good cemera quality"
  },
  {
      SlNo:"03",
      name:"Samsung Galaxy M31",
      image:"https://static.digit.in/default/db80c6f12355307b593c0af60ad5403adbd2ab06.jpeg?tr=n-product_detail_leader_thumb",
      price:"15999/-",
      review:"Good Usable product"

  },
  {
      SlNo:"04",
      name:"iPhone XR",
      image:"https://smartworldkenya.com/public/uploads/products/meta/Glwtk9hFX2UdirzYPhSHL4IFhjRHstZw1Wz4rNf5.jpeg",
      price:"62,500/-",
      review:"Awesome product"
  },
  {
      SlNo:"05",
      name:"Lenovo K12 Pro",
      image:"https://www.gizmochina.com/wp-content/uploads/2020/11/Lenovo-K12-Pro-500x500.jpg",
      price:"11,999/-",
      review:"Good Quality product"
  }
]
;
 search:any='';
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products:any,search:any): any {
    if(!products || !search){
      return products;
    }
    return products.filter((item:any) =>
     item.name.toLowerCase().includes(search.toLowerCase())
     || item.review.toLowerCase().includes(search.toLowerCase())
     );
  }

}

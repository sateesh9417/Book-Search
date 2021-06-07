
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(books:any,search:any): any {
    if(!books || !search){
      return books;
    }
    return books.filter((item:any) =>
     item.book.toLowerCase().includes(search.toLowerCase())
     || item.Review.toLowerCase().includes(search.toLowerCase())
     );
  }

}

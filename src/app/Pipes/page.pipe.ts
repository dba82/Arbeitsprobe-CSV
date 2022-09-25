import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page',
  pure: false
})
export class PagePipe implements PipeTransform {
  
  transform(value: any[], pageNumber : number, pageSize : number) : any[]{
    //pageNumber startet bei 1, statt 0
    return value.slice(pageSize * (pageNumber - 1), pageSize * (pageNumber - 1) + pageSize)
  }

}

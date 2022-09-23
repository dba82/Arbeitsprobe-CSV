import { Pipe, PipeTransform } from '@angular/core';
import { PageService } from './page.service';

@Pipe({
  name: 'page',
  pure: false
})
export class PagePipe implements PipeTransform {
  constructor(private pageService : PageService ){}
  
  transform(value: any[], pageNumber : number) : any[]{
    //pageNumber startet bei 1, statt 0
    return value.slice(this.pageService.pageSize * (pageNumber - 1), this.pageService.pageSize * (pageNumber - 1) + this.pageService.pageSize)
  }

}

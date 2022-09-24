import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paged'
})
export class PagedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

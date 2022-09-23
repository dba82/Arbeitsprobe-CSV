import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private data : DataService) { }

  statisticsFor(fieldname : string){
    const counts = this.data.table.map( (row : any) => row[fieldname])
                             .reduce( (a, b) => {
                              a[b] = a[b] ? a[b] + 1 : 1;
                              return a;
                             }, {})
    return Object.keys(counts).map( (key : string) => {
      return { name: key,
               percentage: counts[key]/this.data.table.length,
               count: counts[key]
              };
    }).sort((a,b)=> a.percentage < b.percentage ? 1 : -1)                         
  }
}

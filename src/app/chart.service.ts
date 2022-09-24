import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private data: DataService) { }

  /*statisticsFor(fieldname: string) {
    const counts = this.data.table.getColumnByName(fieldname)
      .reduce((a, b) => {
        a[b] = {
          count: a[b] ? a[b] + 1 : 1,
          name: b
        }
        return a;
      }, {})
    return Object.keys(counts).map((key: string) => {
      return {
        ...counts[key],
        percentage: counts[key] / this.data.table.length,
      };
    }).sort((a, b) => a.percentage < b.percentage ? 1 : -1)
  }*/
}

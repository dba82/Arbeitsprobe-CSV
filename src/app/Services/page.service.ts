import { Injectable } from '@angular/core';
import { DataTable } from '../Data Classes/data-table';
import { DataService } from './data.service';


 /**
 * PageService dient dazu einem Tablecomponent die
 */
@Injectable({
  providedIn: 'root'
})
export class PageService {
  private table : DataTable= new DataTable([], []);
  public pageSize : number = 25;
  private _pageNumber : number = 1;

  /**
 * PageService benötigt die aktuelle Tabelle, um die Gesamtseitenzahl zu berechnen
 */
  constructor(private data : DataService){
    this.data.tableLoaded.subscribe(x=>this.table = this.data.table);
  }
  
  get numberOfPages() : number{
    return Math.ceil(this.table.length / this.pageSize);
  }

  get pageNumber():number {
    return this._pageNumber;
  }

  set pageNumber(n : number){
    n = Math.floor(n);
    if ( 0 > n || n > this.numberOfPages) return; 
    this._pageNumber = n;  
  }

  isLegalCombination(pagesize : number, pagenumber : number) : boolean{
      return pagenumber <= this.numberOfPages;
  }
}

import { Injectable } from '@angular/core';
import { DataTable } from './data-table';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private table = new DataTable([], []);
  public pageSize : number = 25;
  private _pageNumber : number = 1;

  constructor(private data : DataService){
    data.tableLoaded.subscribe(x => this.table = this.data.table);
  }
  
  get numberOfPages(){
    return Math.ceil(this.table.length / this.pageSize);
  }

  get pageNumber(){
    return this._pageNumber;
  }

  set pageNumber(n : number){
    if (this.table.length < (n - 1) * this.pageSize || n < 1) return; //weil es eine Seite mehr geben darf
    this._pageNumber = n;  
  }
}

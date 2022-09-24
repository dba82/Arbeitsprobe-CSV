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
    data.table.subscribe(x => this.table = x);
  }
  
  get numberOfPages(){
    return Math.ceil(this.table.length / this.pageSize);
  }

  get pageNumber(){
    return this._pageNumber;
  }

  set pageNumber(n : number){
    console.log(n, this.table.length, n * this.pageSize, this.table.length < (n+1) * this.pageSize)
    if (this.table.length < (n - 1) * this.pageSize || n < 1) return; //weil es eine Seite mehr geben darf
    this._pageNumber = n;  
  }
}

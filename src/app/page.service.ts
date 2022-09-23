import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public pageSize : number = 25;
  private _pageNumber : number = 1;

  constructor(private data : DataService){}
  
  get numberOfPages(){
    return Math.ceil(this.data.table.length / this.pageSize);
  }

  get pageNumber(){
    return this._pageNumber;
  }

  set pageNumber(n : number){
    console.log(n, this.data.table.length, n * this.pageSize, this.data.table.length < n * this.pageSize)
    if (this.data.table.length < n * this.pageSize || n < 1) return;
    this._pageNumber = n;  
  }
}

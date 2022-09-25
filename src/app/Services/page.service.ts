import { Injectable } from '@angular/core';
import { DataTable } from '../Data Classes/data-table';
import { DataService } from './data.service';


/**
 * Der PageService
 * - Informiert Komponenten über die aktuelle Seitenzahl, Seitengröße 
 *   und festgelegte Standardseitengrößen.
 * - Setzt Seitenzahl und Seitengröße neu und prüft dabei, ob die gewünschte Zahl Sinn ergibt.
 * - berechnet bei vorgegebener Seitengröße die benötigte Seitenanzahl für die Tabelle
 * - prüft ob eine Seitenzahl zur gegebenen Tabelle und Seitengröße passt
 */
@Injectable({
  providedIn: 'root'
})
export class PageService {
  private table : DataTable= new DataTable([], []);
  public pageSize : number = 25;
  private _pageNumber : number = 1;
  public standardPageSizes : number[] = [25, 50, 75, 100, 200];

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

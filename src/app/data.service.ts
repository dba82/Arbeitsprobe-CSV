import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from './file.service';
import { DataTable } from './data-table';
import { BehaviorSubject, firstValueFrom, lastValueFrom, map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tableLoaded = new BehaviorSubject(false);
  public filename = 'articles';
  public table : DataTable = new DataTable([], []);

  constructor(public http: HttpClient, public file: FileService) {
    this.http
      .get('assets/' + this.filename + '.csv', { responseType: 'text' })
      .subscribe(x=>{
         this.table = DataTable.fromCSVString(x)
         this.tableLoaded.next(true);
        });

    file.fileLoaded.subscribe((value : string) =>{
      this.table = DataTable.fromCSVString(value);
      this.tableLoaded.next(true);
    });
  }

  download(filename = 'articles') {
    const csvString = this.table.toCSVString();
    this.file.downloadAsText(csvString, filename + '.csv')
  }

  openFile(){
    this.file.openFile();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiledownloadService } from './filedownload.service';
import { DataTable } from './data-table';
import { BehaviorSubject, firstValueFrom, lastValueFrom, map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tableLoaded = new BehaviorSubject(false);
  public filename = 'articles';
  public table : DataTable = new DataTable([], []);

  constructor(public http: HttpClient, public fd: FiledownloadService) {
    this.http
      .get('assets/' + this.filename + '.csv', { responseType: 'text' })
      .subscribe(x=>{
         this.table = DataTable.fromCSVString(x)
         this.tableLoaded.next(true);
        });

    fd.fileLoaded.subscribe((value : string) =>{
      this.table = DataTable.fromCSVString(value);
      this.tableLoaded.next(true);
    });
  }

  async download(filename = 'articles') {
    const csvString = this.table.toCSVString();
    this.fd.downloadAsText(csvString, filename + '.csv')
  }

}

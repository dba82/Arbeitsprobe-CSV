import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiledownloadService } from './filedownload.service';
import { DataTable } from './data-table';
import { firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tableLoaded: Observable<string>;
  public filename = 'articles';
  public table : DataTable = new DataTable([], []);

  constructor(public http: HttpClient, public fd: FiledownloadService) {
    this.tableLoaded = this.http
      .get('assets/' + this.filename + '.csv', { responseType: 'text' })
    this.tableLoaded.subscribe(x=> this.table = DataTable.fromCSVString(x));
  }

  async download(filename = 'articles') {
    const csvString = this.table.toCSVString();
    this.fd.downloadAsText(csvString, filename + '.csv')
  }

}

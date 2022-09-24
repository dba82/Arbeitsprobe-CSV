import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CsvService } from './csv.service';
import { FiledownloadService } from './filedownload.service';
import { DataTable } from './data-table';
import { lastValueFrom, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public table: Observable<DataTable>;
  public filename = 'articles';

  constructor(public http: HttpClient, public csv: CsvService, public fd: FiledownloadService) {
    this.table = this.http
      .get('assets/' + this.filename + '.csv', { responseType: 'text' })
      .pipe(
        map((x: string) => DataTable.fromCSVString(x))
      )
  }

  async download(filename = 'articles') {
    const csvString = (await lastValueFrom(this.table)).toCSVString();
    this.fd.downloadAsText(csvString, filename + '.csv')
  }

}

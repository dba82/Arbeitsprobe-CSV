import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from './file.service';
import { DataTable } from '../Data Classes/data-table';
import { BehaviorSubject } from 'rxjs';

/**
 * Der Dataservice
 * - Lädt eine Tabelle entweder per http oder Lokal
 * - Informiert Komponenten, ob eine neue Tabelle geladen ist und 
 *   stellt diese zur Verfügung.
 * - Initiiert einen Dateidownload der Tabelle als CSV-Datei
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tableLoaded = new BehaviorSubject(false);
  public filename = 'articles';
  public table : DataTable = new DataTable([], []);

  constructor(private http: HttpClient, private file: FileService) {
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

  download(filename : string = 'articles') {
    const csvString = this.table.toCSVString();
    this.file.downloadAsText(csvString, filename + '.csv')
  }

  openFile(){
    this.file.openFile();
  }

}

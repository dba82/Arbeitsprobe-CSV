import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from './file.service';
import { DataTable } from '../Data Classes/data-table';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private file: FileService, private router: Router) {
    const onTableData = {
      next: this.loadTable,
      error: (error : Error) => {
        this.router.navigate(['error']);
        console.log(error);
    }
    };

    this.http
      .get('assets/' + this.filename + '.csv', { responseType: 'text' })
      .subscribe(onTableData)
    file.fileLoaded.subscribe(onTableData);
  }

  loadTable = (str : string) => {
    try {
      this.table = DataTable.fromCSVString(str);
      this.tableLoaded.next(true);
     }
     catch (error){
       console.log(error);
       this.router.navigate(['error']);
     } 
   }

  download(filename : string = 'articles') {
    const csvString = this.table.toCSVString();
    this.file.downloadAsText(csvString, filename + '.csv')
  }

  openFile(){
    this.file.openFile();
  }

}

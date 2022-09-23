import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CsvService } from './csv.service';
import { FiledownloadService } from './filedownload.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public table : any[] = [];
  public fieldnames : string[] = "Hauptartikelnr;Artikelname;Hersteller;Beschreibung;Materialangaben;Geschlecht;Produktart;Ärmel;Bein;Kragen;Herstellung;Taschenart;Grammatur;Material;Ursprungsland;Bildname".split(";");
  public filename = 'articles';

  constructor(public http : HttpClient, public csv : CsvService, public fd : FiledownloadService) { 
    this.http.get('assets/' + this.filename + '.csv', {responseType: 'text'})
             .subscribe((e : string)=> this.table = csv.parseCSV(e.substring(this.fieldnames.join(';').length+1), this.fieldnames))
  }


  addNewRowAfter(row : any){
    const index = this.table.indexOf(row);
    this.table.splice(index+1, 0, this.fieldnames.reduce((a : any, b : string) => {
      a[b] = '';
      return a
    }, {}))
  }

  download (filename = 'articles'){
    const csvString = this.csv.toCSVString(this.table, this.fieldnames);
    this.fd.downloadAsText(csvString, filename + '.csv')
  }

}

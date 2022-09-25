import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { PageService } from '../../Services/page.service';
/**
 * Der ToolbarComponent ist ein Container für folgende
 * Funktionalität:
 * - Wechsel zwischen Diagramm- und Tabellenansicht
 * - Download der Datensätze als CSV-Datei
 * - Import einer beliebigen lokalen CSV-Datei
 * - Navigation des Tabellenausschnitts
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent{
  @Output() sizeChange : EventEmitter<string>= new EventEmitter();

  public secondRowVisible : boolean = false;

  constructor(
    public data : DataService, 
    public router : Router, 
    public page : PageService) { }
  /**
   * Die zweite Reihe soll sichtbar sein, wenn der Dateiname der 
   * runterzuladenden Datei eingegeben werden soll. 
   */
  toggleSecondRow(){
    this.secondRowVisible = !this.secondRowVisible;
    this.sizeChange.emit(this.secondRowVisible ? 'small' : 'big');
  }
}

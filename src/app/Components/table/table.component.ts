import { Component, Input} from '@angular/core';
import { DataTable } from '../../Data Classes/data-table';

/**
 * Der TableComponent stellt einen Ausschnitt aus einer Tabelle dar,
 * der über die Seitenzahl und die Seitengröße definiert wird.
 * Bsp: Seite 4 und Seitengröße 25 entspricht den Einträgen 100 bis 125
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() table : DataTable = new DataTable([], []);
  @Input() pageNumber : number = 1;
  @Input() pageSize : number = 25;
}

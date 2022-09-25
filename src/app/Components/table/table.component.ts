import { Component, Input} from '@angular/core';
import { DataTable } from '../../Data Classes/data-table';

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

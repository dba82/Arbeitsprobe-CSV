import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTable } from '../data-table';
import { DataService } from '../data.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() table : DataTable = new DataTable([], []);
  @Input() pageNumber : number = 1;
  @Input() pageSize : number = 25;

  constructor(
    public router : Router){
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent{
  @Input() public items: any[] = [];
}

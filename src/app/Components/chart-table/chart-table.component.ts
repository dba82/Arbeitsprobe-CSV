import { Component, Input } from '@angular/core';
import { ChartData } from '../../Data Classes/chart-data';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent{
  @Input() public data : ChartData = new ChartData([]);;
}

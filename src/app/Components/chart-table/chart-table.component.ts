import { Component, Input } from '@angular/core';
import { ChartData } from '../../Data Classes/chart-data';
/**
 * Der ChartTable stellt die relative und absolute Häufigkeit
 * der Items im ChartData Objekt tabellarisch dar, die Hintergrundfarben
 * werden im CSS definiert und sollten denen im begleitenden PieChartComponent
 * entsprechen.
 */
@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent{
  @Input() public data : ChartData = new ChartData([]);;
}

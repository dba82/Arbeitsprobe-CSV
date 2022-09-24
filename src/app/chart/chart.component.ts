import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { ChartData } from '../chart-data';
import { ChartService } from '../chart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  
  public chartData : ChartData | null = null;
  public columnName : string = '';
  constructor(private route : ActivatedRoute, public data : DataService) { }

  ngOnInit(): void {
    this.subscriptions = [
      combineLatest([this.data.table, this.route.params])
        .subscribe(([table, params]) => {
          this.columnName = params['columnname'];
          const column = table.getColumnByName(this.columnName);
          this.chartData = new ChartData(column);
        })
    ]

  } 
}
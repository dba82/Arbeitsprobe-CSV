import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { ChartData } from '../chart-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  
  public chartData : ChartData | null = null;
  public columnName : string = '';

  constructor(private route : ActivatedRoute, public data : DataService) { }

  ngOnInit(): void {
    this.subscriptions = [
      combineLatest([this.data.tableLoaded, this.route.params])
        .subscribe(([table, params]) => {
          this.columnName = params['columnname'];
          const column = this.data.table.getColumnByName(this.columnName);
          this.chartData = new ChartData(column);
        })
    ]
  } 
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
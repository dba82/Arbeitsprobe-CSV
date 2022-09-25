import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { ChartData } from '../../Data Classes/chart-data';
import { DataService } from '../../Services/data.service';
/**
 * Der ChartPageComponent dient zur Darstellung eines Tortendiagramms
 * und einer begleitenden Tabelle.
 * Die benötigten Daten werden entsprechend der aktuellen url aus 
 * den Tabellendaten des DataServices generiert.
 */
@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  
  public chartData : ChartData | null = null;
  public columnName : string = '';

  constructor(private route : ActivatedRoute, 
      public data : DataService, 
      public router : Router) { }

  ngOnInit(): void {
    /**
     * Wenn die Tabelle fertig geladen ist, werden die Daten für
     * das Tortendiagramm entsprechend der aktuellen url generiert.
     */
    this.subscriptions = [
      combineLatest([this.data.tableLoaded, this.route.params])
        .subscribe(([table, params]) => {
          if (!table) return;
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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ChartService } from '../chart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public items : any[] = [];
  public fieldname : string = '';
  constructor(private route : ActivatedRoute, public chart : ChartService) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : any) => {
      this.items = this.chart.statisticsFor(params.fieldname);
      this.fieldname = params.fieldname;
    });
  }  
}
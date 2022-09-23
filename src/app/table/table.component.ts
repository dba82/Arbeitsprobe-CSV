import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartService } from '../chart.service';
import { DataService } from '../data.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  constructor(
    public data : DataService, 
    public router : Router, 
    public pageService:PageService,
    public route : ActivatedRoute,
    public chart : ChartService ){
  }

  ngOnInit(): void {
      this.route.params.subscribe((params : any)=>{
        if (params.pagenumber){
          this.pageService.pageNumber = +params.pagenumber;
        }
      })
  }
}

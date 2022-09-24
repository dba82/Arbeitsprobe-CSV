import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineAll, combineLatest, forkJoin, Subscription } from 'rxjs';
import { DataTable } from '../data-table';
import { DataService } from '../data.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public table: DataTable = new DataTable([], []);

  constructor(private route: ActivatedRoute,
    public page: PageService,
    public data: DataService) { }

  ngOnInit(): void {
    this.subscriptions = [
      combineLatest([this.data.tableLoaded, this.route.params])
        .subscribe(([table, params]) => {
          this.page.pageSize = +params['pagesize'];
          this.page.pageNumber = +params['pagenumber'];
          this.table = this.data.table;
        })
    ]

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}

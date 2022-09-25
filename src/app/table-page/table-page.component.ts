import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
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
    public data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscriptions = [
      combineLatest([this.data.tableLoaded, this.route.params])
        .subscribe(([table, params]) => {
          if (!table) return;
          
          this.page.pageSize = +params['pagesize'];
          this.page.pageNumber = +params['pagenumber'];
          this.table = this.data.table;

          if (!this.page.isLegalCombination(+params['pagesize'], +params['pagenumber'])){
            this.router.navigate(['page', +params['pagesize'], this.page.numberOfPages ])
          }
        })
    ]

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}

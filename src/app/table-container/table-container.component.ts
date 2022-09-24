import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineAll, combineLatest, forkJoin, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public loaded : boolean = false;
  constructor(private route: ActivatedRoute,
    public page: PageService,
    public data: DataService) { }

  ngOnInit(): void {
    this.subscriptions = [
      combineLatest([this.data.table, this.route.params])
        .subscribe(([table, params]) => {
          this.page.pageSize = +params['pagesize'];
          this.page.pageNumber = +params['pagenumber'];
        })
    ]

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}

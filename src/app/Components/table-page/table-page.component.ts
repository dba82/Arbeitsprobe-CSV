import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { DataTable } from '../../Data Classes/data-table';
import { DataService } from '../../Services/data.service';
import { PageService } from '../../Services/page.service';
/**
 * Der TablePageComponent dient zur Darstellung eines Tabellenausschnitts.
 * Er ist außerdem dafür zuständig anhand der aktuellen URL den
 * entsprechenden Ausschnitt im PageService zu setzen,
 * sobald die Tabelle im DataService geladen ist.
 */
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

          /**
           * Sollte die in der URL angegebene Kombination von Seitennummer und Seitengröße
           * keinen Sinn ergeben, wird zur letzten Seite navigiert.
           * */
          if (!this.page.isLegalCombination(+params['pagesize'], +params['pagenumber'])){
            this.router.navigate(['page', +params['pagesize'], this.page.numberOfPages ])
          }
        })
    ]

  }

  ngOnDestroy() : void{
    this.subscriptions.forEach((subscription: Subscription) : void => subscription.unsubscribe());
  }
}

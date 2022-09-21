import { Component, OnInit, Renderer2, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  constructor(public data : DataService, public renderer : Renderer2, public router : Router ){
  }

  log(e : Event){
    this.router.navigate([String(this.renderer.parentNode(e.target).dataset.entrynumber)])
  }


}

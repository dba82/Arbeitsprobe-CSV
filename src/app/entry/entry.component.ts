import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  public entrynumber : number = -1;

  constructor(public data : DataService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : any) => {
      this.entrynumber = +params.entrynumber;
    });
  }
}

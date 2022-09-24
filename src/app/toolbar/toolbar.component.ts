import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent{
  @Output() sizeChange = new EventEmitter();

  public secondRowVisible = false;
  constructor(
    public data : DataService, 
    public router : Router, 
    public page : PageService) { }

  toggleSecondRow(){
    this.secondRowVisible = !this.secondRowVisible;
    this.sizeChange.emit(this.secondRowVisible ? 'small' : 'big');
  }
}

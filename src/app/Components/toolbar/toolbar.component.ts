import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { PageService } from '../../Services/page.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent{
  @Output() sizeChange : EventEmitter<string>= new EventEmitter();

  public secondRowVisible : boolean = false;

  constructor(
    public data : DataService, 
    public router : Router, 
    public page : PageService) { }

  toggleSecondRow(){
    this.secondRowVisible = !this.secondRowVisible;
    this.sizeChange.emit(this.secondRowVisible ? 'small' : 'big');
  }
}

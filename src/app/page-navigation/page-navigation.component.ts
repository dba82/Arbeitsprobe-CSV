import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent{
  public standardPageSizes = [25, 50, 75, 100, 200];

  constructor(public router : Router, public pageService : PageService) { }

}

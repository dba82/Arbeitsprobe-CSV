import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  constructor(public router : Router, public pageService : PageService) { }

  ngOnInit(): void {
  }


}

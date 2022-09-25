import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../Services/page.service';
/**
 * Der PageNavigationComponent dient dazu durch eine in
 * Seiten aufgeteilte Tabelle zu blättern.
 * Er kann überall auf der Seite platziert werden und kommuniziert
 * mit dem TableComponent über den PageService.
 */
@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent{
  constructor(public router : Router, 
    public pageService : PageService) { }

}

import { Component } from '@angular/core';
/**
 * Der AppComponent definiert die Unterteilung in Toolbar und
 * sonstigen Inhalt.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Wenn die Toolbar größer wird, sollte die Höhe des Hauptinhalt
   * entsprechend schrumpfen. Siehe Template.
   */
  public sizeOfMainContent : string = 'big';
}

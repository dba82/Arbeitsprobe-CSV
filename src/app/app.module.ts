import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PagePipe } from './page.pipe';
import {MatIconModule} from '@angular/material/icon';
import { ChartComponent } from './chart/chart.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import {MatSelectModule} from '@angular/material/select';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ToolbarComponent,
    PieChartComponent,
    PagePipe,
    ChartComponent,
    PageNavigationComponent,
    TableContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    ExperimentalScrollingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

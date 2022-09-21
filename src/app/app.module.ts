import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { EntryComponent } from './entry/entry.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EntryComponent,
    ToolbarComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    ExperimentalScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

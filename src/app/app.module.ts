import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Angular Material Module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './Components/App/app.component';

//Top-Level-Components
import { TablePageComponent } from './Components/table-page/table-page.component';
import { ChartPageComponent } from './Components/chart-page/chart-page.component'
import { ErrorPageComponent } from './Components/error-page/error-page.component';

import { ChartTableComponent } from './Components/chart-table/chart-table.component';
import { TableComponent } from './Components/table/table.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { PageNavigationComponent } from './Components/page-navigation/page-navigation.component';

import { PagePipe } from './Pipes/page.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent,
    ChartPageComponent,
    ChartTableComponent,
    TableComponent,
    ToolbarComponent,
    PieChartComponent,
    PageNavigationComponent,
    PagePipe,
    ErrorPageComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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

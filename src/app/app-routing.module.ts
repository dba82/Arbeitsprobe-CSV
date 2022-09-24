import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', redirectTo: 'page/25/1', pathMatch: 'full'},
  {path: 'chart/:columnname', component: ChartComponent},
  {path: 'page/:pagesize/:pagenumber', component: TableContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

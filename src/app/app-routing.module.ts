import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', redirectTo: 'page/1', pathMatch: 'full'},
  {path: 'chart/:fieldname', component: ChartComponent},
  {path: 'page/:pagenumber', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

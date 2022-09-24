import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './chart-page/chart-page.component';

import { TablePageComponent } from './table-page/table-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'page/25/1', pathMatch: 'full'},
  {path: 'chart/:columnname', component: ChartPageComponent},
  {path: 'page/:pagesize/:pagenumber', component: TablePageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

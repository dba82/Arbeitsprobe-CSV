import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './Components/chart-page/chart-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { TablePageComponent } from './Components/table-page/table-page.component';

const routes: Routes = [
  {path: 'chart/:columnname', component: ChartPageComponent},
  {path: 'page/:pagesize/:pagenumber', component: TablePageComponent,},
  {path: 'error', component: ErrorPageComponent},
  {path: '', redirectTo: 'page/25/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

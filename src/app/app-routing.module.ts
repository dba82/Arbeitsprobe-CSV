import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: ':entrynumber', component: EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

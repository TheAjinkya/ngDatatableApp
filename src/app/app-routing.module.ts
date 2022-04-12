import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './users/datatable/datatable.component';
import { NgDatatableComponent } from './users/ng-datatable/ng-datatable.component';

const routes: Routes = [{
  path:'datatable', component: DatatableComponent
},
  {path:'ngdatatable', component: NgDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

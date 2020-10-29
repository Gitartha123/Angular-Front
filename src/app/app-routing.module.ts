import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GetemployeeComponent} from './employee/getemployee/getemployee.component';


let routes: Routes;
routes = [
  {
    path: '',
    component: GetemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

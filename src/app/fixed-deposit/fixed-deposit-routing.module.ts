import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedDepositListComponent } from './fixed-deposit-list/fixed-deposit-list.component';

const routes: Routes = [
  { path: '', component: FixedDepositListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedDepositRoutingModule { }

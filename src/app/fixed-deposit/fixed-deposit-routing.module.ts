import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedDepositListComponent } from './fixed-deposit-list/fixed-deposit-list.component';
import { CreateFixedDepositComponent } from './create-fixed-deposit/create-fixed-deposit.component';

const routes: Routes = [
  { path: '', component: FixedDepositListComponent },
  { path: 'create-fixed-deposit', component: CreateFixedDepositComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedDepositRoutingModule { }

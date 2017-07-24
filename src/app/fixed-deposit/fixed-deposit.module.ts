import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FixedDepositRoutingModule } from './fixed-deposit-routing.module';
import { FixedDepositListComponent } from './fixed-deposit-list/fixed-deposit-list.component';
import { CreateFixedDepositComponent } from './create-fixed-deposit/create-fixed-deposit.component';

@NgModule({
  imports: [
    SharedModule,
    FixedDepositRoutingModule
  ],
  declarations: [FixedDepositListComponent, CreateFixedDepositComponent]
})
export class FixedDepositModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FixedDepositRoutingModule } from './fixed-deposit-routing.module';
import { FixedDepositListComponent } from './fixed-deposit-list/fixed-deposit-list.component';
import { CreateFixedDepositModalComponent } from './create-fixed-deposit-modal/create-fixed-deposit-modal.component';

@NgModule({
  imports: [
    SharedModule,
    FixedDepositRoutingModule
  ],
  declarations: [
    FixedDepositListComponent,
    CreateFixedDepositModalComponent
  ],
  entryComponents: [
    CreateFixedDepositModalComponent
  ]
})
export class FixedDepositModule { }

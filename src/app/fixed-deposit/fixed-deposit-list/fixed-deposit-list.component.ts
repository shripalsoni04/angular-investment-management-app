import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';

import { AppTitleService, FixedDepositService } from '../../core/services';
import { FixedDeposit } from '../../shared/models';

@Component({
  selector: 'app-fixed-deposit-list',
  templateUrl: './fixed-deposit-list.component.html',
  styleUrls: ['./fixed-deposit-list.component.scss']
})
export class FixedDepositListComponent implements OnInit {

  dataSource: DataSource<FixedDeposit>;

  displayedColumns = ['fdNumber', 'bankName', 'accountNo', 'amount', 'startDate', 'endDate', 'isReinvest', 'actions'];

  columnConfig = [
    { id: 'fdNumber', name: 'FD Number'},
    { id: 'bankName', name: 'Bank Name'},
    { id: 'accountNo', name: 'A/C No.'},
    { id: 'amount', name: 'Amount', align: 'right', width: 'auto'},
    { id: 'startDate', name: 'Start Date', align: 'center', width: '100px'},
    { id: 'endDate', name: 'End Date', align: 'center', width: '100px'},
    { id: 'isReinvest', name: 'Re-invest', align: 'center', width: '60px'}
  ];

  constructor(
    private appTitleService: AppTitleService,
    private fdService: FixedDepositService
  ) {
    this.appTitleService.setTitle('Fixed Deposits');
  }

  ngOnInit() {
    this.dataSource = new FDDataSource(this.fdService);
    this.fdService.getFixedDeposits();
  }

  addFD() {

  }

  editFD() {

  }

  deleteFD() {

  }
}

class FDDataSource extends DataSource<any> {

  constructor(private fdService: FixedDepositService) {
    super();
  }

  connect() {
    return this.fdService.lstFixedDeposit$.asObservable();
  }

  disconnect() { }
}

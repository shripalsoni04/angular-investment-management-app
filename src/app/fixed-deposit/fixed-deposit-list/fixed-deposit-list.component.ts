import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdDialog } from '@angular/material';

import { AppTitleService, FixedDepositService, DialogService } from '../../core/services';
import { FixedDeposit } from '../../shared/models';
import { CreateFixedDepositModalComponent } from '../create-fixed-deposit-modal/create-fixed-deposit-modal.component';

@Component({
  selector: 'app-fixed-deposit-list',
  templateUrl: './fixed-deposit-list.component.html',
  styleUrls: ['./fixed-deposit-list.component.scss']
})
export class FixedDepositListComponent implements OnInit {

  dataSource: DataSource<FixedDeposit>;

  displayedColumns = ['fdNumber', 'bankName', 'accountNo', 'amount', 'startDate', 'endDate', 'isReinvest', 'actions'];

  columnConfig = [
    { id: 'fdNumber', name: 'FD Number' },
    { id: 'bankName', name: 'Bank Name' },
    { id: 'accountNo', name: 'A/C No.' },
    { id: 'amount', name: 'Amount', align: 'right', width: 'auto' },
    { id: 'startDate', name: 'Start Date', align: 'center', width: '100px' },
    { id: 'endDate', name: 'End Date', align: 'center', width: '100px' },
    { id: 'isReinvest', name: 'Re-invest', align: 'center', width: '60px' },
    { id: 'actions', name: 'Actions', align: 'center', width: '90px' }
  ];

  isBusy = false;

  constructor(
    private appTitleService: AppTitleService,
    private mdDialog: MdDialog,
    private dialogService: DialogService,
    public fdService: FixedDepositService
  ) {
    this.appTitleService.setTitle('Fixed Deposits');
  }

  ngOnInit() {
    this.dataSource = new FDDataSource(this.fdService);
    this.isBusy = true;
    this.fdService.getFixedDeposits().subscribe(() => {
      this.isBusy = false;
    }, () => {
      this.isBusy = false;
    });
  }

  addFD() {
    this.showFDFormModal();
  }

  editFD(fdModel: FixedDeposit) {
    this.showFDFormModal(fdModel.id);
  }

  deleteFD(fdModel: FixedDeposit) {
    this.dialogService.confirmDelete().subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.isBusy = true;
        this.fdService.deleteFixedDeposit(fdModel.id).subscribe(() => {
          this.isBusy = false;
        });
      }
    });
  }

  private showFDFormModal(fdId?: string) {
    this.mdDialog.open(CreateFixedDepositModalComponent, {
      data: { fdId },
      panelClass: 'modal-sm'
    }).afterClosed();
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

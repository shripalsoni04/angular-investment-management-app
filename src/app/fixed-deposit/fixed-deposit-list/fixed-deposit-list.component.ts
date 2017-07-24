import { Component, OnInit } from '@angular/core';

import { AppTitleService } from '../../core/services';

@Component({
  selector: 'app-fixed-deposit-list',
  templateUrl: './fixed-deposit-list.component.html',
  styleUrls: ['./fixed-deposit-list.component.scss']
})
export class FixedDepositListComponent implements OnInit {

  constructor(private appTitleService: AppTitleService) {
    this.appTitleService.setTitle('Fixed Deposits');
  }

  ngOnInit() {
  }

}

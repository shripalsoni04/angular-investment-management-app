import { Component, OnInit } from '@angular/core';

import { AppTitleService } from '../core/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private appTitleService: AppTitleService) {
    this.appTitleService.setTitle('Dashboard');
  }

  ngOnInit() {
  }

}

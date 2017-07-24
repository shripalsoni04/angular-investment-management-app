import { Component, OnInit } from '@angular/core';

import { AppTitleService } from '../../services';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  title: string;

  constructor(
    private appTitleService: AppTitleService
  ) {
    this.appTitleService.title$.subscribe((title: string) => {
      this.title = title;
    });
  }

  ngOnInit() {

  }

}

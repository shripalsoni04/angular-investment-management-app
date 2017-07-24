import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { AppTitleService } from '../../services';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  title: string;

  links = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Fixed Deposit', link: '/fixed-deposit' },
  ];

  constructor(
    private appTitleService: AppTitleService,
    private router: Router
  ) {
    this.appTitleService.title$.subscribe((title: string) => {
      this.title = title;
    });
  }

  ngOnInit() {

  }

  goToPage(link) {
    this.router.navigate([link.link]);
    this.sidenav.close();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdSnackBarModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AuthService, SnackBarService, AppTitleService, FixedDepositService, InMemoryDBService } from './services';
import { AppRouteGuard } from './route-guards';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SnackBarComponent } from './components/snackbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSnackBarModule,
    MdIconModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDBService, {
      apiBase: '/'
    })
  ],
  declarations: [
    NotFoundComponent,
    BaseLayoutComponent,
    SnackBarComponent
  ],
  providers: [
    // services
    AuthService,
    SnackBarService,
    AppTitleService,
    FixedDepositService,

    // route guards
    AppRouteGuard
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class CoreModule { }

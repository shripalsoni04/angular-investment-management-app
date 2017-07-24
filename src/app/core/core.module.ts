import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdSnackBarModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthService, SnackBarService, AppTitleService } from './services';
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
    MdButtonModule
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

    // route guards
    AppRouteGuard
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class CoreModule { }

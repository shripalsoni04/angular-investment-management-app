import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdSnackBarModule, MdIconModule } from '@angular/material';

import { AuthService, SnackBarService } from './services';
import { AppRouteGuard } from './route-guards';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SnackBarComponent } from './components/snackbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSnackBarModule,
    MdIconModule
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

    // route guards
    AppRouteGuard
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class CoreModule { }

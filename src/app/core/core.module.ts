import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from './services';
import { AppRouteGuard } from './route-guards';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    BaseLayoutComponent
  ],
  providers: [
    // services
    AuthService,

    // route guards
    AppRouteGuard
  ]
})
export class CoreModule { }

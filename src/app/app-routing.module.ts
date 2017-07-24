import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authRoutes } from './auth/auth-routes';
import { BaseLayoutComponent } from './core/components/base-layout/base-layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRouteGuard } from './core/route-guards';

const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AppRouteGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'fixed-deposit',
        loadChildren: './fixed-deposit/fixed-deposit.module#FixedDepositModule'
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

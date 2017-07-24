import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CdkTableModule
  ]
})
export class SharedModule { }

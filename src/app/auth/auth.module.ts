import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }

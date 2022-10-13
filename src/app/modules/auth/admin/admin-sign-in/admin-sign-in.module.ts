import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSignInRoutingModule } from './admin-sign-in-routing.module';
import { AdminSignInComponent } from './admin-sign-in.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    AdminSignInRoutingModule,
    SharedModule
  ]
})
export class AdminSignInModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagesRoutingModule } from './manages-routing.module';
import { ManagesComponent } from './manages.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    ManagesComponent
  ],
  imports: [
    CommonModule,
    ManagesRoutingModule,
    SharedModule
  ]
})
export class ManagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    SharedModule
  ]
})
export class CartsModule { }

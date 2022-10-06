import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppInfoRoutingModule } from './app-info-routing.module';
import { AppInfoComponent } from './app-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PoliciesComponent } from './policies/policies.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppInfoComponent,
    ContactUsComponent,
    PoliciesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AppInfoRoutingModule
  ]
})
export class AppInfoModule { }

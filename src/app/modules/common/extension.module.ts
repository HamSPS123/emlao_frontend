import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeroComponent
  ]
})
export class ExtensionModule { }

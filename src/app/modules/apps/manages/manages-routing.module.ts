import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagesComponent } from './manages.component';

const routes: Routes = [
    {path: '', component: ManagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagesRoutingModule { }

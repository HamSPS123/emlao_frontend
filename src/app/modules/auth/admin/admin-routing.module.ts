import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'sign-in', loadChildren: () => import('./admin-sign-in/admin-sign-in.module').then(m=>m.AdminSignInModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthAdminRoutingModule { }

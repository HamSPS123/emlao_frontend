import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppInfoComponent } from './app-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
    {path: '', component: AppInfoComponent, children: [
        {path: 'about', component: AboutUsComponent},
        {path: 'contact', component: ContactUsComponent},
        {path: 'policy', component: PoliciesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppInfoRoutingModule { }

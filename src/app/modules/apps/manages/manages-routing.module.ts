/* eslint-disable arrow-parens */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagesComponent } from './manages.component';

const routes: Routes = [
    {
        path: '',
        component: ManagesComponent,
        children: [
            {
                path: 'users',
                loadChildren: () =>
                    import('./users/users.module').then((m) => m.UsersModule),
            },
        ],
    },
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'users',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagesRoutingModule {}

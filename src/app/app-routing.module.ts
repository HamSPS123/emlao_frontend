/* eslint-disable max-len */
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { NoAuthGuard } from 'app/core/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    {
        path: '',
        component: LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children: [
         {path: '', pathMatch : 'full', redirectTo: 'home'},
         {path: 'home', loadChildren: ()=>import('./modules/home/home.module').then(m => m.HomeModule)} ,
         {path: 'app', loadChildren: ()=>import('./modules/app-info/app-info.module').then(m => m.AppInfoModule)} ,
         {path: 'shop', loadChildren: ()=>import('./modules/shops/shops.module').then( m => m.ShopsModule)},
    // {path: 'auth', loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)}
        ]
    },
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'home'},


    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children: [
            {path: 'admin', loadChildren: () => import('app/modules/auth/admin/admin.module').then(m => m.AuthAdminModule)},
            {path: 'users', loadChildren: () => import('app/modules/auth/users/users.module').then( m => m.AuthUsersModule)}
        ]
    },

    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children: [
            {path: 'carts', loadChildren: () => import('app/modules/apps/carts/carts.module').then(m => m.CartsModule)},
            {path: 'check-out', loadChildren: () => import('app/modules/apps/check-out/check-out.module').then(m => m.CheckOutModule)},
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            // {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    {
        path: 'admin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver
        },
        data: {
            role: 'SHOP'
        },
        children: [
            {path: 'manages', loadChildren: () => import('app/modules/apps/manages/manages.module').then(m => m.ManagesModule)},
        ]
    },

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/errors/error-404/error-404.module').then(m => m.Error404Module)},
        ]
    },
    {path: '**', redirectTo: '404-not-found'}
];

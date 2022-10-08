/* eslint-disable max-len */
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
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
            // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            // {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)}
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

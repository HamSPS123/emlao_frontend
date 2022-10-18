/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { AuthService } from 'app/modules/auth/common/auth.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    /**
     * Constructor
     */
    constructor(private _authService: AuthService, private _router: Router) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        const role = route?.data?.role;
        return this._check(redirectUrl, role);
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        const role = childRoute?.data?.role;
        return this._check(redirectUrl, role);
    }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this._check('/', '');
    }

    private _check(redirectURL: string, role: string): Observable<boolean> {
        return this._authService.isAuthenticated().pipe(
            switchMap((authenticated) => {
                if (authenticated) {
                    const routeRole = role;
                    const userRole = this._authService.getRole();
                    if (routeRole && routeRole != userRole) {
                        this._router.navigate(['/admin/sign-in'], {
                            queryParams: { redirectURL },
                        });
                        return of(false);
                    }
                    return of(true);
                } else {
                    this._router.navigate(['/home']);
                    return of(false);
                }
            })
        );
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
        if (this._authService.isAuthenticated) {
            const routeRole = route?.data?.role;
            const userRole = this._authService.getRole();

            if (routeRole && routeRole != userRole) {
                this._router.navigate(['/home']);
                return false;
            }

            return true;
        } else {
            this._router.navigate(['login']);
            return false;
        }
    }
}

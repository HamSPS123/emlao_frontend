import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { JwtService } from '../services/jwt.service';
import { AuthService } from 'app/modules/auth/common/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private jwtService: JwtService) {}

    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.jwtService.getToken();

       if(token) {
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer '+ token)
        });
       }

        // Response
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    const condition = request.url.includes('/sign-in') ||  request.url.includes('/password');

                    if (!condition) {
                        this.authService.signOut();
                        location.reload();
                    }
                }

                return throwError(() => error);
            })
        );
    }
}

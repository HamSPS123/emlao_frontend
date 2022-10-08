/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from 'app/core/services/jwt.service';
import { environment } from 'environments/environment.prod';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl: string;
    roleAs: string;

    constructor(
        private http: HttpClient,
        private storage: LocalStorageService,
        private jwtService: JwtService
    ) {
        this.apiUrl = environment.apiUrl;
    }

    signIn(body: Object): Observable<any> {
        const url: string = `${this.apiUrl}/auth/user/sign-in`;
        return this.http.post<any>(url, body).pipe(
            map((response: any) => {
                if (response?.statusCode === 200 && response?.data) {
                    return response.data;
                }
            })
        );
    }

    signOut() {
        this.jwtService.clearToken();
        this.storage.clear();
    }

    isAuthenticated(): Observable<boolean> {
        const token = this.jwtService.getToken();

        if (token) {
            return of(true);
        } else {
            return of(false);
        }
    }

    getRole() {
        this.roleAs = this.storage.retrieve('ROLE');
        return this.roleAs;
    }
}

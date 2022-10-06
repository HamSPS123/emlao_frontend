/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
// import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl: string;
    roleAs: string;

    constructor(
        private http: HttpClient,
        // private storage: LocalStorageService
    ) {
        this.apiUrl = environment.apiUrl;
    }

    signIn(body: Object) {
        const url: string = `${this.apiUrl}/auth/user/sign-in`;
        return this.http.post<any>(url, body).pipe(
            map((response: any) => {
                if (response?.statusCode === 200 && response?.data) {
                    return response.data;
                }
            })
        );
    }
}

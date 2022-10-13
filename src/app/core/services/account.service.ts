import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/shared/interfaces/user.interface';
import { environment } from 'environments/environment.prod';
import { LocalStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    apiUrl: string;
    user: User;

    constructor(
        private http: HttpClient,
        private storage: LocalStorageService,
        private router: Router,
        private jwtService: JwtService
    ) {
        this.apiUrl = environment.apiUrl;
    }

    setUserLogin(user): void {
        this.storage.store('USER', user);
    }

    setRole(role): void {
        this.storage.store('ROLE', role);
    }

    getUserLogin(): User {
        this.user = this.storage.retrieve('USER');
        return this.user;
    }

    clearLoggedUser(): void {
        this.storage.clear('USER');
    }

    // checkUserRole(roleCode: string): void {
    //     const role = roleCode.toUpperCase();

    //     if(role) {
    //         if(role === CUST)
    //     }
    // }

    getProfile(): Subscription {
        const url: string = `${this.apiUrl}/auth/profile`;
        const token = this.jwtService.token();
        console.log(token);

        return this.http.get<any>(url, { headers: token }).subscribe(
            (response) => {
                if (response.statusCode === 200) {
                    const user = response.data;
                    const role = user.account.role.code.toUpperCase();

                    this.setUserLogin(user);
                    this.setRole(role);
                    // this.checkuserRole(role);
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                const errorMessage = error.error.message;
                console.log(errorMessage);
            }
        );
    }
}

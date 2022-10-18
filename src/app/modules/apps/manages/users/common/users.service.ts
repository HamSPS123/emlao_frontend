/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    apiUrl: string;

    private dataStore: {items: any[]} = {items: []};
    private users: BehaviorSubject<any | null> = new BehaviorSubject(null);
    readonly users$ = this.users.asObservable();
    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    findAll() {
        const url: string = `${this.apiUrl}/`;
        return 0;
    }
}

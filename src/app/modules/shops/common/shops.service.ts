/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Category } from './categories.interface';
import { Product } from './products.interface';
import { Shop } from './shops.interface';

@Injectable({
    providedIn: 'root',
})
export class ShopsService {
    apiUrl: string;

    private dataStore: { items: any[] } = { items: [] };

    private shop: BehaviorSubject<Shop> = new BehaviorSubject(null);
    readonly shop$ = this.shop.asObservable();

    private shops: BehaviorSubject<Shop[]> = new BehaviorSubject(null);
    readonly shops$ = this.shops.asObservable();

    private categories: BehaviorSubject<Category[]> = new BehaviorSubject(null);
    readonly categories$ = this.categories.asObservable();

    private products: BehaviorSubject<Category[]> = new BehaviorSubject(null);
    readonly products$ = this.products.asObservable();

    private product: BehaviorSubject<Category> = new BehaviorSubject(null);
    readonly product$ = this.product.asObservable();

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    findShop(): Observable<Shop[]> {
        const url: string = `${this.apiUrl}/shops`;

        return this.http.get<Shop[]>(url).pipe(
            tap((response: any) => {
                if (response.statusCode === 200 && response.data) {
                    this.dataStore.items = response.data;
                    this.shops.next(Object.assign({}, this.dataStore).items);
                }
            })
        );
    }

    findShopOne(id: string) {
        const url = `${this.apiUrl}/shops/${id}`;

        console.log(url);

        return this.http.get<Shop>(url).pipe(
            tap((respsonse: any) => {
                if (respsonse.statusCode === 200 && respsonse.data) {
                    const data = respsonse.data;
                    this.shop.next(data);
                }
            })
        );
    }

    findCategory(shop: string) {
        const url = `${this.apiUrl}/categories/find/${shop}`;

        return this.http.get<Category[]>(url).pipe(
            tap((response: any) => {
                console.log(response);
                if (response.statusCode === 200 && response.data) {
                    this.dataStore.items = response.data;
                    this.categories.next(
                        Object.assign({}, this.dataStore).items
                    );
                }
            })
        );
    }

    findProducts(shop: number): Observable<Product[]> {
        const path = 'assets/data/products.json';

        return this.http.get<Product[]>(path).pipe(
            tap((res: Product[]) => {
                this.dataStore.items = res;
                this.products.next(Object.assign({}, this.dataStore).items);
            })
        );
    }

    findProductOne(id: number) {
        const url = `${this.apiUrl}/products/${id}`;
        return this.http.get<Product[]>(url).pipe(
            tap((res) => {
                // this.product.next(res);
                console.log(res);
            })
        );
    }
}

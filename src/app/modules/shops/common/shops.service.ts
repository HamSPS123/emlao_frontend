/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Category } from './categories.interface';
import { Product } from './products.interface';
import { Shop } from './shops.interface';

@Injectable({
    providedIn: 'root',
})
export class ShopsService {
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

    constructor(private http: HttpClient) {}

    findShop(): Observable<Shop[]> {
        const path: string = 'assets/data/shops.json';

        return this.http.get<Shop[]>(path).pipe(
            tap((res: Shop[]) => {
                this.dataStore.items = [];
                this.dataStore.items = res;
                this.shops.next(Object.assign({}, this.dataStore).items);
            })
        );
    }

    findShopOne(id: number) {
        const path: string = 'assets/data/shops.json';

        return this.http.get<Shop[]>(path).pipe(
            tap((res: Shop[]) => {
                const shop = res.filter((item) => item.id === id);

                this.shop.next(shop[0]);
            })
        );
    }

    findCategory(shop: number) {
        const path = 'assets/data/categories.json';

        return this.http.get<Category[]>(path).pipe(
            tap((res: Category[]) => {
                const categories = res.filter((item) => item.shop === shop);

                this.dataStore.items = categories;
                this.categories.next(Object.assign({}, this.dataStore).items);
            })
        );
    }

    findProducts(shop: number): Observable<Product[]> {
        const path = 'assets/data/products.json';

        return this.http.get<Product[]>(path).pipe(
            tap((res: Product[]) => {
                const products = res.filter((item) => item.shop === shop);

                this.dataStore.items = products;
                this.products.next(Object.assign({}, this.dataStore).items);
            })
        );
    }

    findProductOne(id: number) {
        const path = 'assets/data/products.json';
        return this.http.get<Product[]>(path).pipe(
            tap((res: Product[]) => {
                const product = res.filter((item) => item.id === id);

                this.product.next(product[0]);
            })
        );
    }
}

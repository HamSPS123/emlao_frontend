import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { ShopsService } from './common/shops.service';

@Injectable({
    providedIn: 'root',
})
export class ShopListsResolver implements Resolve<any> {
    constructor(private shopListService: ShopsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | any {
        return this.shopListService.findShop();
    }
}

@Injectable({
    providedIn: 'root',
})
export class ShopsResolver implements Resolve<any> {
    constructor(private shopService: ShopsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.paramMap.get('id');
        return this.shopService.findShopOne(id);
    }
}

@Injectable({
    providedIn: 'root',
})
export class ShopDetailResolver implements Resolve<any> {
    constructor(private shopsService: ShopsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.paramMap.get('id');
        return forkJoin([
            this.shopsService.findCategory(+id),
            this.shopsService.findProducts(+id),
        ]);
    }
}

@Injectable({
    providedIn: 'root',
})
export class ProductsResolver implements Resolve<any> {
    constructor(private shopsService: ShopsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.paramMap.get('id');
        return this.shopsService.findProductOne(+id);
    }
}

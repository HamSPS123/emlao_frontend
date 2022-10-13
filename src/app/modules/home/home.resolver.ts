import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShopsService } from '../shops/common/shops.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
    constructor(private shopsService: ShopsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.shopsService.findShop();
  }
}

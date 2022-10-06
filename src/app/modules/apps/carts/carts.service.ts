/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './common/carts.interface';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

    private cart: BehaviorSubject<Cart> = new BehaviorSubject(null);
    readonly cart$ = this.cart.asObservable();

  constructor() { }
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { Product } from '../common/products.interface';
import { ShopsService } from '../common/shops.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    amount: number;
    product: Product;
    constructor(
        private shopsService: ShopsService,
    ) {}

    ngOnInit(): void {
        this.amount = 1;
        this.getProduct();
    }

    getProduct() {
        // this.shopsService.product$.pipe().subscribe((res: Product) => {
        //     this.product = res;
        // });
    }

    minusAmount() {
        if (this.amount <= 1) {
            this.amount = 1;
        } else {
            this.amount -= 1;
        }
    }

    plusAmount() {
        this.amount += 1;
    }
}

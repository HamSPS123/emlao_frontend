import { Component, OnInit } from '@angular/core';
import { Shop } from '../common/shops.interface';
import { ShopsService } from '../common/shops.service';

@Component({
    selector: 'app-shop-details',
    templateUrl: './shop-details.component.html',
    styleUrls: [],
})
export class ShopDetailsComponent implements OnInit {
    shop: Shop;
    constructor(private shopsService: ShopsService) {}

    ngOnInit(): void {
        this.getShop();
    }

    getShop(): void {
        this.shopsService.shop$.pipe().subscribe((response) => {
            this.shop = response;
            console.log(response);
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Shop } from '../common/shops.interface';
import { ShopsService } from '../common/shops.service';

@Component({
    selector: 'app-shop-lists',
    templateUrl: './shop-lists.component.html',
    styleUrls: ['./shop-lists.component.scss'],
})
export class ShopListsComponent implements OnInit {
    shops: Shop[];
    private unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(private shopsService: ShopsService) {}

    ngOnInit(): void {
        this.getShop();
    }

    getShop(): void {
        this.shopsService.shops$
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((res: Shop[]) => {
                this.shops = res;
            });
    }
}

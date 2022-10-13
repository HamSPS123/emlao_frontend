/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Shop } from '../shops/common/categories.interface';
import { ShopsService } from '../shops/common/shops.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    shops: Shop[];

    constructor(private shopsService: ShopsService) {}

    private unsubscribeAll: Subject<any> = new Subject<any>();

    ngOnInit(): void {
        this.getShop();
    }

    getShop(): void {
        this.shopsService.shops$
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((response) => {
                this.shops = response;
            });
    }
}

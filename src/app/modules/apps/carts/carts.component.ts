import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrls: [],
})
export class CartsComponent implements OnInit {
    // carts: any[];
    carts: any[] = [
        {
            id: 1,
            title: 'Back Ribs',
            price: 150000,
            qty: 10,
            unit: 'kg',
            image: 'assets/images/menu1.jfif'
        },
        {
            id: 2,
            title: 'Top Loin Steak',
            price: 78000,
            qty: 10,
            unit: 'kg',
            image: 'assets/images/menu5.jfif'
        },
        {
            id: 3,
            title: 'Blade Roast',
            price: 110000,
            qty: 10,
            unit: 'kg',
            image: 'assets/images/menu2.jfif'
        },
        {
            id: 4,
            title: 'Under Blade Pot Roast',
            price: 98000,
            qty: 10,
            unit: 'kg',
            image: 'assets/images/menu6.jfif'
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}

/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-parens */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopsService } from '../../common/shops.service';
import { Category } from '../../common/categories.interface';
import { Product } from '../../common/products.interface';
import { items } from 'app/mock-api/apps/file-manager/data';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
    categories: Category[];
    // categories: Observable<Category[]>;
    products: Product[];
    productsFilter: Product[] = [];

    constructor(
        private shopsService: ShopsService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        // this.categories = this.shopsService.categories$;
        this.getCategory();
        this.getProduct();
        this.onResetFilter();
    }

    getCategory(): void {
        this.shopsService.categories$.pipe().subscribe((response) => {
            this.categories = response;
            this.cdr.markForCheck();
        });
    }

    getProduct(): void {
        // this.shopsService.products$.pipe().subscribe((res) => {
        //     this.products = res;
        //     this.cdr.markForCheck();
        // });
    }

    onTabsChange(id: number) {
        if (id === 0) {
            this.onResetFilter();
        } else {
            this.onFilterProducts(id);
        }
    }

    onFilterProducts(id: number) {
        // const category = this.categories[id];

        // const filter = this.products.filter(
        //     (cate) => cate.category.id === category.id
        // );
        // this.productsFilter = filter;
    }

    onResetFilter() {
        this.productsFilter = this.products;
    }
}

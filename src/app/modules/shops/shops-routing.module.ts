import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './shop-details/about/about.component';
import { MapComponent } from './shop-details/map/map.component';
import { MenusComponent } from './shop-details/menus/menus.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopListsComponent } from './shop-lists/shop-lists.component';
import {
    ProductsResolver,
    ShopDetailResolver,
    ShopListsResolver,
    ShopsResolver,
} from './shops.resolver';

const routes: Routes = [
    {
        path: '',
        component: ShopListsComponent,
        resolve: {
            shopList: ShopListsResolver,
        },
    },
    {
        path: ':id',
        component: ShopDetailsComponent,
        resolve: {
            shop: ShopsResolver,
            detail: ShopDetailResolver,
        },
        children: [
            { path: '', component: MenusComponent },
            { path: 'about', component: AboutComponent },
            { path: 'map', component: MapComponent },
        ],
    },
    {
        path: 'product/:id',
        component: ProductsComponent,
        resolve: {
            product: ProductsResolver,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShopsRoutingModule {}

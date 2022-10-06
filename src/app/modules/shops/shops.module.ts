import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops.component';
import { ShopListsComponent } from './shop-lists/shop-lists.component';
import { SharedModule } from 'app/shared/shared.module';
import { AboutComponent } from './shop-details/about/about.component';
import { MapComponent } from './shop-details/map/map.component';
import { MenusComponent } from './shop-details/menus/menus.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ShopsComponent,
    ShopListsComponent,
    ShopDetailsComponent,
    MenusComponent,
    AboutComponent,
    MapComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    SharedModule
  ],
})
export class ShopsModule { }

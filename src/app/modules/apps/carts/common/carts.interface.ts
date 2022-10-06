import { Product } from 'app/modules/shops/common/products.interface';

export class CartItem {
    products: Product;
    quantity: number;
    total: number;
}

export class Cart {
    shop: number;
    items: CartItem[];
    tax: number;
    discount: number;
    totalPrice: number;
}

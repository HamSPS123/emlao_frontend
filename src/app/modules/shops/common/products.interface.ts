import { Category } from './categories.interface';

export interface Product {
    id?: number;
    name?: string;
    price?: number;
    shop?: number;
    category?: Category;
    images?: string[];
}

import { Category } from './categories.interface';

export interface Product {
    _id: string;
    shop: string;
    category: Category;
    code: string;
    qrcode: string;
    name: string;
    description: string;
    images: string[];
    price: number;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    id: string;
}

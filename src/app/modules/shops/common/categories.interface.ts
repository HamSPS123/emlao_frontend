export interface Category {
    _id:         string;
    shop:        Shop;
    name:        string;
    description: string;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Shop {
    _id:  string;
    name: string;
}

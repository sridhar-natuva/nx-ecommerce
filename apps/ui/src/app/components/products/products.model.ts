export interface Product {
    id: string;
    name: string;
    category: string;
    price: number
}

export interface Cart extends Product {
    count: number;
}
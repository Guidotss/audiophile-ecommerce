import { Product } from "./products";

export interface Cart { 
    id: number; 
    totalItems: number; 
    totalPrice: number;
    items: CartItem[];
}

export interface CartItem extends Product {
    quantity: number;
}
import { updateQuantity } from './cart-item.controller';
import { Product } from "../product/product.entity";

export interface CartItem extends Product{
    quantity: number;
}
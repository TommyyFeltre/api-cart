import { products } from "../../products";

export class ProductService{

    async find() {
        return products;
    }
    
    async getById(id: string) {
        return products.find(i => i.id === id) || null;
    }
}
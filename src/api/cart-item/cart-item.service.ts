import cart from "../../../product.json";
import { assign } from "lodash";

export class CartItemService{
    async find(){
        return cart;
    }

    async getById(id: string){
        return cart.find(item => item.id === id) || null;
    }

    async add(item: any){
        cart.push(item);
        return item;
    }

    async update(id: string, data: any){
        const item = await this.getById(id);
        if(!item){
            throw Error("Not Found");
        }
        assign(item, data);
        return item;
    }

    async remove(id: string){
        const index = cart.findIndex(item => item.id === id);
        if(index === -1){
            throw Error("Not Found");
        }
        cart.splice(index, 1);
    }
}

export default new CartItemService();
import { products } from './../../products';
import { Request, Response, NextFunction } from "express";
import { ProductService } from './product.service';

const productService = new ProductService();

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const products = await productService.find();
    res.json(products);
};

export const singleProduct = async (req: Request, res: Response, next: NextFunction) => {
    const item = await productService.getById(req.params.id);
    if(!item){
        res.status(404);
        res.send();
        return;
    }
    res.send(item);

}
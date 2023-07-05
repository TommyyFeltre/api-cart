import { Request, Response, NextFunction } from "express";
import { ProductService } from './product.service';
import { NotFoundError } from "../../errors/not-founds";

const productService = new ProductService();

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const products = await productService.find();
    res.json(products);
};

export const singleProduct = async (req: Request, res: Response, next: NextFunction) => {
    const item = await productService.getById(req.params.id);
    if(!item){
        throw new NotFoundError();
    }
    res.send(item);

}
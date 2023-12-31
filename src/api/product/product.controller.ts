import { Request, Response, NextFunction } from "express";
import { ProductService } from './product.service';
import { NotFoundError } from "../../errors/not-founds";
import { TypedRequest } from "../../utils/typed-request.interface";
import { QueryProductDTO } from "./product.dto";

const productService = new ProductService();

export const list = async (req: TypedRequest<any, QueryProductDTO>, res: Response, next: NextFunction) => {
    console.log(req.query);
    const products = await productService.find(req.query);
    res.json(products);
};

export const singleProduct = async (req: Request, res: Response, next: NextFunction) => {
    const item = await productService.getById(req.params.id);
    if(!item){
        throw new NotFoundError();
    }
    res.send(item);

}
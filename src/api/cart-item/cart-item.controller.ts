import { Request, Response, NextFunction } from "express";
import cartItemService from "./cart-item.service";
import productService from "../product/product.service";
import { CartItem } from "./cart-item.entity";
import { TypedRequest } from "../../utils/typed-request.interface";
import { NotFoundError } from "../../errors/not-founds";
import { th } from "@faker-js/faker";
import { genericErrorHandler } from "../../errors/generic";
import { plainToClass } from "class-transformer";
import { AddCartItemDTO, updateQuantityDTO } from "./cart-item.dto";
import { validate } from 'class-validator';
import { ValidationError } from "../../errors/validation-error";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const list = await cartItemService.find();
  res.json(list);
};

export const add = async (
  req: TypedRequest<AddCartItemDTO>,
  res: Response<CartItem>,
  next: NextFunction
) => {
  try {
    
    const { id, quantity } = req.body;
    const product = await productService.getById(id);

    if (!product) {
      throw new NotFoundError();
    }
    const newItem: CartItem = {
      product: id,
      quantity,
    };
    const saved = await cartItemService.add(newItem);
    res.json(saved);
  } catch (err) {
    next(err);
  }
};

export const updateQuantity = async (
  req: TypedRequest<updateQuantityDTO>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const newQuantity = req.body.quantity;
    const updated = await cartItemService.update(id, { quantity: newQuantity });
    res.json(updated);
  } catch (err: any) {
    next(err);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    await cartItemService.remove(id);
    res.status(204);
    res.send();
  } catch (err: any) {
    next(err);
  }
};

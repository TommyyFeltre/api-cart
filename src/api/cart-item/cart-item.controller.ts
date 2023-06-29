import { cart } from "../../cart";
import { Request, Response, NextFunction } from "express";
import cartItemService from "./cart-item.service";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const list = await cartItemService.find();
  res.json(list);
};

export const add = async(req: Request, res: Response, next: NextFunction) => {
  const newItem = await cartItemService.add(req.body);
  res.json(newItem);
};

export const updateQuantity = async (req: Request, res: Response, next: NextFunction
) => {
  const id = req.params.id;
  const newQuantity = req.body.quantity;
  if (newQuantity === undefined || newQuantity < 0 || newQuantity > 10) {
    res.status(400);
    res.send("invalid quantity");
    return;
  }
  try{
    const updated = await cartItemService.update(id, {quantity: newQuantity});
    res.json(updated);
  }catch(err: any) {
    if(err.message === "Not Found"){
      res.status(404);
      res.send();
    }else{
      next(err);
    }
  }
  
};

export const remove = (req: Request, res: Response, next: NextFunction
  ) => {
    const id = req.params.id;
    const index = cart.findIndex(item => item.id === id);
    if(index === -1){
      res.status(404);
      res.send();
      return;
    }
    cart.splice(index, 1);
    res.status(204);
    res.send();
  }

export const toBeImplemented = (req, res, next) => {
  res.send("to be implemented");
};

import { cart } from "../../cart";
import { Request, Response, NextFunction } from "express";

export const list = (req: Request, res: Response, next: NextFunction) => {
  res.json(cart);
};

export const add = (req: Request, res: Response, next: NextFunction) => {
  const toAdd = req.body;
  cart.push(toAdd);
  res.json(toAdd);
};

export const updateQuantity = (req: Request, res: Response, next: NextFunction
) => {
  const id = req.params.id;
  const newQuantity = req.body.quantity;
  if (newQuantity === undefined || newQuantity < 0 || newQuantity > 10) {
    res.status(400);
    res.send("invalid quantity");
    return;
  }

  const item = cart.find(item => item.id === id);
  if(!item){
    res.status(404);
    res.send();
    return;
  }

  item.quantity = newQuantity;
  res.send(item);
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

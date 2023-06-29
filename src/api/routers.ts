import { Router } from "express";
import cartItemRouter from "./cart-item/cart-item.router";

const router = Router();

router.use('/cart-items', cartItemRouter);

export default router;
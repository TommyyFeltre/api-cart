import { Router } from "express";
import cartItemRouter from "./cart-item/cart-item.router";
import productsRouter from "./product/product.router";

const router = Router();

router.use('/cart-items', cartItemRouter);
router.use('/products', productsRouter);

export default router;
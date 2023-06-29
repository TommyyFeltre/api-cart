import { Router } from "express";
import { add, list, toBeImplemented, updateQuantity } from "./cart-item.controller";

const router = Router();

router.get('/',list);
router.post('/',add);
router.patch('/:id',updateQuantity);
router.delete('/:id', toBeImplemented);


export default router;
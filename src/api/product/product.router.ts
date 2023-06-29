import { Router } from "express";
import { list, singleProduct } from "./product.controller";

const router = Router();

router.get('/', list);
router.get('/:id', singleProduct);

export default router;
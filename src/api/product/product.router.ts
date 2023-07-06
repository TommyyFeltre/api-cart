import { Router } from "express";
import { list, singleProduct } from "./product.controller";
import { QueryProductDTO } from "./product.dto";
import { validate } from "../../utils/validation.middleware";

const router = Router();

router.get('/', validate(QueryProductDTO, 'query'), list);
router.get('/:id', singleProduct);

export default router;
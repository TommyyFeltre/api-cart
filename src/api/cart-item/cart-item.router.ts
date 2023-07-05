import { Router } from "express";
import { add, list, remove, updateQuantity } from "./cart-item.controller";
import { validate } from "../../utils/validation.middleware";
import { AddCartItemDTO, updateQuantityDTO } from "./cart-item.dto";

const router = Router();

router.get('/',list);
router.post('/', validate(AddCartItemDTO, 'body'), add);
//posso omettere il parametro body perchè è già impostato di default
router.patch('/:id', validate(updateQuantityDTO), updateQuantity);
router.delete('/:id', remove);


export default router;
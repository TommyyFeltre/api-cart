import { plainToClass } from 'class-transformer';
import { NextFunction, Request, Response } from "express";
import { validate as classValidate} from 'class-validator';
import { ValidationError } from '../errors/validation-error';

//origin può esserre body oppure query se non lo specifico è body
export function validate<T extends Object>(type :(new() => T), origin: 'body' | 'query' = 'body'){
    return async (req: Request, res: Response, next: NextFunction) =>{
        const data = plainToClass(type, req[origin]);
        const errors = await classValidate(data);

        if(errors.length){
            next(new ValidationError(errors));
        }else{
            next();
        }
    }
}
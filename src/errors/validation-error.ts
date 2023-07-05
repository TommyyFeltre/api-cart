import { NextFunction, Request, Response } from "express";
import { ValidationError as OriginalValidationError } from 'class-validator';
import { forEach } from "lodash";

export class ValidationError extends Error {
    constructor(public originalErrors : OriginalValidationError[]){
        super();
        this.name = 'ValidationError';
        const tmp = originalErrors.map(error => {
            return Object.values(error.constraints as any);
        }).flat().join(';');
        this.message = tmp;
    }
}

export const validationErrorHandler = ( err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError){
        res.status(400);
        res.json({
            name: err.name,
            message: err.message,
            details: err.originalErrors.map(err => ({
                property: err.property,
                constraints: err.constraints,
                value: err.value
            }))
            // err.originalErrors.map(err => {  
            //     return{
            //         property: err.property,
            //     constraints: err.constraints,
            //     value: err.value
            //     }
                
            // })
        })
    }else{
        next(err);
    }
}
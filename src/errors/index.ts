import { genericErrorHandler } from "./generic";
import { notFoundHandler } from "./not-founds";
import { validationErrorHandler } from "./validation-error";

export const errorHandler = [notFoundHandler, validationErrorHandler, genericErrorHandler];
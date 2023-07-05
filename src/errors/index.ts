import { genericErrorHandler } from "./generic";
import { notFoundHandler } from "./not-founds";

export const errorHandler = [notFoundHandler, genericErrorHandler];
import { NextFunction, Request, Response } from "express";

export class NotFoundError extends Error {
  constructor() {
    super();
    this.name = 'NotFoundError';
    this.message = 'Entity not found';
  }
}

export const notFoundHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof NotFoundError) {
    res.status(404);
    res.json({
        error: err.name,
        message: err.message
    });
  } else {
    next(err);
  }
};

import { NextFunction, Request, Response } from "express";

export const genericErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500);
  res.json({
    error: "Internal server error",
    message: "The server encountered an internal error",
  });
};

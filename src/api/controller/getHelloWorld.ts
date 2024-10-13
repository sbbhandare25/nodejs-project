import { NextFunction, Request, Response } from "express";

export default function getHelloWorld(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Send response.
  res.json("Hello World");
  return next();
}

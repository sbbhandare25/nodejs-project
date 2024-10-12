import { NextFunction, Request, Response, RequestHandler } from 'express'

export default function getHelloWorld(req: Request, res: Response, next: NextFunction) {
  res.json('Hello World')
}

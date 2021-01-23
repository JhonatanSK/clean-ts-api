import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-controw-allow-origin', '*')
  res.set('access-controw-allow-headers', '*')
  res.set('access-controw-allow-methods', '*')
  next()
}

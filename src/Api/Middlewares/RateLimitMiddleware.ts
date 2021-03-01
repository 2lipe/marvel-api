import { NextFunction, Request, Response } from 'express';
import { RateLimiterPostgres } from 'rate-limiter-flexible';
import { Pool } from 'pg';

import { SERVER_MESSAGES } from '../Helpers/messages-helpers';

const psqlClient = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

const limiter = new RateLimiterPostgres({
  storeClient: psqlClient,
  keyPrefix: 'ratelimit',
  points: 200,
  duration: 1,
});

export async function rateLimiter(req: Request, res: Response, next: NextFunction) {
  try {
    await limiter.consume(req.ip);

    return next();
  } catch (err) {
    return next(SERVER_MESSAGES.manyRequests);
  }
}

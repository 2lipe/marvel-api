import unless from 'express-unless';
import { NextFunction, Request, Response } from 'express';

import { responseTreated, unauthorized } from '../Helpers/http-error-helpers';
import { decodeJwtToken } from '../Helpers/jwt-helper';
import { TOKEN_MESSAGES } from '../Helpers/messages-helpers';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.body.token || req.headers.authorization;

    const notAuth = !authHeader;
    if (notAuth) {
      const response = unauthorized(TOKEN_MESSAGES.missingToken);

      return responseTreated(response, res);
    }

    const [, token] = authHeader.split(' ');
    const userId = await decodeJwtToken(token);

    const userIdIsNotNull = userId !== null;
    if (userIdIsNotNull) {
      return next();
    }

    const response = unauthorized(TOKEN_MESSAGES.invalidToken);

    return responseTreated(response, res);
  } catch (e) {
    return next(e);
  }
}

authMiddleware.unless = unless;

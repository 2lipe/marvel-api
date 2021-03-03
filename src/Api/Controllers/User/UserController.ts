import { NextFunction, Request, Response } from 'express';

import { joiResponseError, ok, responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { UserService } from '../../../Application/Services/UserService';
import { UserSchemas } from '../../../Application/Schemas/UserSchema';

export class UserController {
  async teste(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      ok({}, 'deu certo');
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.userSchemas.createUserSchema.validateAsync(req.body);

      const userService = new UserService();

      const result = await userService.create(req.body);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.userSchemas.updateUserSchema.validateAsync(req.body);

      const userService = new UserService();

      const result = await userService.update(req.body);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async session(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.userSchemas.sessionUserSchema.validateAsync(req.body);

      const userService = new UserService();

      const { email, password } = req.body;

      const result = await userService.session(email, password);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }
}

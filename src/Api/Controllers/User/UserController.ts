import { NextFunction, Request, Response } from 'express';

import { responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { IUserService } from '../../../Application/Interfaces/Service/IUserService';
import { UserService } from '../../../Application/Services/UserService';
import { createUserSchema, sessionUserSchema, updateUserSchema } from '../../../Application/Schema/UserSchema';

export class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await createUserSchema.validateAsync(req.body);

      const userService: IUserService = new UserService();

      const result = await userService.create(req.body);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await updateUserSchema.validateAsync(req.body);

      const userService: IUserService = new UserService();

      const result = await userService.update(req.body);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async session(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await sessionUserSchema.validateAsync(req.body);

      const userService: IUserService = new UserService();

      const { email, password } = req.body;

      const result = await userService.session(email, password);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }
}

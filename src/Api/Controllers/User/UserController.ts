import { NextFunction, Request, Response } from 'express';

import { responseTreated } from 'src/Api/Helpers/http-error-helpers';
import { IUserService } from 'src/Application/Interfaces/Service/IUserService';
import { UserService } from 'src/Application/Services/UserService';
import { createUserSchema, sessionUserSchema, updateUserSchema } from 'src/Application/Schema/UserSchema';

export class UserController {
  private _userService: IUserService = new UserService();

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await createUserSchema.validateAsync(req.body);

      const result = await this._userService.create(req.body);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await updateUserSchema.validateAsync(req.body);

      const result = await this._userService.update(req.body);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async session(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await sessionUserSchema.validateAsync(req.body);

      const { email, password } = req.body;

      const result = await this._userService.session(email, password);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }
}

import { NextFunction, Request, Response } from 'express';

import { responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { UserSchemas } from '../../../Application/Schemas/UserSchema';
import { UserService } from '../../../Application/Services/UserService';

export class UserComicController {
  async addFavoriteComic(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.comicSchemas.addComicScheme.validateAsync(req.body);

      const userService = new UserService();

      const result = await userService.addFavoriteComic(req.body);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async getFavoriteComic(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.userSchemas.userIdScheme.validateAsync(req.params);

      const { userId } = req.params;

      const userService = new UserService();

      const result = await userService.getFavoriteComic(userId);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async removeFavoriteComic(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.comicSchemas.removeComicScheme.validateAsync(req.body);

      const { comicId, userId } = req.body;

      const userService = new UserService();

      const result = await userService.removeFavoriteComic(comicId, userId);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }
}

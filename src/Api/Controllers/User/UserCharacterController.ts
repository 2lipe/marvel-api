import { NextFunction, Request, Response } from 'express';

import { joiResponseError, responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { UserSchemas } from '../../../Application/Schemas/UserSchema';
import { UserService } from '../../../Application/Services/UserService';

export class UserCharacterController {
  async addFavoriteCharacter(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.characterSchemas.addCharacterScheme.validateAsync(req.body);

      const userService = new UserService();

      const result = await userService.addFavoriteCharacter(req.body);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async getFavoriteCharacter(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.userSchemas.userIdScheme.validateAsync(req.params);

      const { userId } = req.params;

      const userService = new UserService();

      const result = await userService.getFavoriteCharacter(userId);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async removeFavoriteCharacter(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await UserSchemas.characterSchemas.removeCharacterScheme.validateAsync(req.body);

      const { characterId, userId } = req.body;

      const userService = new UserService();

      const result = await userService.removeFavoriteCharacter(characterId, userId);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }
}

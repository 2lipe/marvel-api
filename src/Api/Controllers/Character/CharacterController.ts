import { NextFunction, Request, Response } from 'express';

import { responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { CharacterSchemas } from '../../../Application/Schemas/CharacterSchema';
import { CharacterService } from '../../../Application/Services/CharacterService';

export class CharacterController {
  async getCharacters(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CharacterSchemas.getCharactersScheme.validateAsync(req.body);

      const comicService = new CharacterService();

      const { userId, searchParameter } = req.body;

      const result = await comicService.getCharacters(userId, searchParameter);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }

  async getCharacterComic(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CharacterSchemas.getCharacterComicScheme.validateAsync(req.body);

      const { characterId } = req.params;
      const { userId } = req.body;

      const comicService = new CharacterService();

      const result = await comicService.getCharacterComics(characterId, userId);

      responseTreated(result, res);
    } catch (err) {
      err.isJoi === true ? res.status(422).json(err) : next(err);
    }
  }
}

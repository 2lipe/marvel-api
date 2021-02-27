import { NextFunction, Request, Response } from 'express';
import { ComicSchemas } from '../../../Application/Schemas/ComicSchema';

import { joiResponseError, responseTreated } from '../../../Api/Helpers/http-error-helpers';
import { ComicService } from '../../../Application/Services/ComicService';

export class ComicController {
  async getComics(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await ComicSchemas.getComicsScheme.validateAsync(req.body);

      const comicService = new ComicService();

      const { userId, searchParameter } = req.body;

      const result = await comicService.getComics(userId, searchParameter);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }

  async getComicCharacters(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await ComicSchemas.getComicCharacters.validateAsync(req.body);

      const { comicId } = req.params;
      const { userId } = req.body;

      const comicService = new ComicService();

      const result = await comicService.getCharactersComic(comicId, userId);

      responseTreated(result, res);
    } catch (err) {
      joiResponseError(err, res, next);
    }
  }
}

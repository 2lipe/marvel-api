import { Router } from 'express';

import { ComicController } from '../../../Api/Controllers/Comic/ComicController';

const comicRoutes = Router();
const comicController = new ComicController();

comicRoutes.post('/', comicController.getComics);
comicRoutes.post('/:comicId/characters', comicController.getComicCharacters);

export { comicRoutes };

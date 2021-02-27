import { Router } from 'express';

import { userRoutes } from './User/UserRoutes';
import { characterRoutes } from './Character/CharacterRoutes';
import { comicRoutes } from './Comic/ComicRoutes';
import { userCharacterRoutes } from './User/UserCharacterRoutes';
import { userComicRouter } from './User/UserComicRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/user/character', userCharacterRoutes);
routes.use('/user/comic', userComicRouter);

routes.use('/comic', comicRoutes);
routes.use('/character', characterRoutes);

export { routes };

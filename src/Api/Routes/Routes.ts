import { Router } from 'express';

import { userRoutes } from './User/UserRoutes';
import { characterRoutes } from './Character/CharacterRoutes';
import { comicRoutes } from './Comic/ComicRoutes';
import { userCharacterRoutes } from './User/UserCharacterRoutes';
import { userComicRouter } from './User/UserComicRoutes';

const Routes = Router();

Routes.use('/user', userRoutes);
Routes.use('/user/character', userCharacterRoutes);
Routes.use('/user/comic', userComicRouter);

Routes.use('/comic', comicRoutes);
Routes.use('/character', characterRoutes);

export { Routes };

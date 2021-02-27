import { Router } from 'express';

import { UserComicController } from '../../../Api/Controllers/User/UserComicController';

const userComicRouter = Router();
const userComicController = new UserComicController();

userComicRouter.post('/add-favorite-comic', userComicController.addFavoriteComic);
userComicRouter.get('/:userId/favorite-comic', userComicController.getFavoriteComic);
userComicRouter.post('/remove-favorite-comic', userComicController.removeFavoriteComic);

export { userComicRouter };

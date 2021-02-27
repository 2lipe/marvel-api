import { Router } from 'express';

import { UserCharacterController } from '../../../Api/Controllers/User/UserCharacterController';

const userCharacterRoutes = Router();
const userCharacterController = new UserCharacterController();

userCharacterRoutes.post('/add-favorite-character', userCharacterController.addFavoriteCharacter);
userCharacterRoutes.get('/:userId/favorite-character', userCharacterController.getFavoriteCharacter);
userCharacterRoutes.post('/remove-favorite-character', userCharacterController.removeFavoriteCharacter);

export { userCharacterRoutes };

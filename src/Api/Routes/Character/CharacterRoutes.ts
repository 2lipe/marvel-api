import { Router } from 'express';

import { CharacterController } from '../../../Api/Controllers/Character/CharacterController';

const characterRoutes = Router();
const characterController = new CharacterController();

characterRoutes.post('/', characterController.getCharacters);
characterRoutes.post('/:characterId/comics', characterController.getCharacterComic);

export { characterRoutes };

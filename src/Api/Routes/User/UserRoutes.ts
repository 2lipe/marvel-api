import { Router } from 'express';

import { UserController } from '../../../Api/Controllers/User/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/teste', userController.teste);
userRoutes.post('/create', userController.create);
userRoutes.post('/update', userController.update);
userRoutes.post('/session', userController.session);

export { userRoutes };

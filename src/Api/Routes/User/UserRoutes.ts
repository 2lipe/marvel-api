import { Router } from 'express';

import { UserController } from 'src/Api/Controllers/User/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/create', userController.create);
userRoutes.post('/update', userController.update);
userRoutes.post('/session', userController.session);

export default userRoutes;

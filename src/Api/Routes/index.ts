import { Router } from 'express';

import userRoutes from './User/UserRoutes';

export const routes = Router();

routes.use('/user', userRoutes);

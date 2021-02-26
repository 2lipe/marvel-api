import { Router } from 'express';

import userRoutes from './User/UserRoutes';

const routes = Router();

routes.use('/user', userRoutes);

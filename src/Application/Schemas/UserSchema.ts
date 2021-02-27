import Joi from 'joi';

import { CreateCharacterDto } from '../Dtos/CreateCharacterDto';
import { CreateComicDto } from '../Dtos/CreateComicDto';
import { CreateUserDto } from '../Dtos/CreateUserDto';
import { UpdateUserDto } from '../Dtos/UpdateUserDto';

export const Schemas = {
  userSchemas: {
    userIdScheme: Joi.object<Pick<UpdateUserDto, 'id'>>({
      id: Joi.string().required(),
    }),

    createUserSchema: Joi.object<CreateUserDto>({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),

    updateUserSchema: Joi.object<UpdateUserDto>({
      id: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().allow(''),
      oldPassword: Joi.string().allow(''),
    }),

    sessionUserSchema: Joi.object<Pick<CreateUserDto, 'email' | 'password'>>({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },

  characterSchemas: {
    addCharacterScheme: Joi.object<CreateCharacterDto>({
      name: Joi.string().required(),
      characterId: Joi.string().required(),
      description: Joi.string().required(),
      thumbnailUri: Joi.string().required(),
      variantUri: Joi.string().required(),
      userId: Joi.string().required(),
    }),

    removeCharacterScheme: Joi.object<Pick<CreateCharacterDto, 'userId' | 'characterId'>>({
      userId: Joi.string().required(),
      characterId: Joi.string().required(),
    }),
  },

  comicSchemas: {
    addComicScheme: Joi.object<CreateComicDto>({
      title: Joi.string().required(),
      comicId: Joi.string().required(),
      description: Joi.string().required(),
      thumbnailUri: Joi.string().required(),
      variantUri: Joi.string().required(),
      userId: Joi.string().required(),
    }),

    removeComicScheme: Joi.object<Pick<CreateComicDto, 'userId' | 'comicId'>>({
      userId: Joi.string().required(),
      comicId: Joi.string().required(),
    }),
  },
};

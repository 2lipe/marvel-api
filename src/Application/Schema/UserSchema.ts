import Joi from 'joi';
import { CreateCharacterDto } from '../Dtos/CreateCharacterDto';
import { CreateComicDto } from '../Dtos/CreateComicDto';

import { CreateUserDto } from '../Dtos/CreateUserDto';
import { UpdateUserDto } from '../Dtos/UpdateUserDto';

export const userIdScheme = Joi.object<Pick<UpdateUserDto, 'id'>>({
  id: Joi.string().required(),
});

export const createUserSchema = Joi.object<CreateUserDto>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const updateUserSchema = Joi.object<UpdateUserDto>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().allow(''),
  oldPassword: Joi.string().allow(''),
});

export const sessionUserSchema = Joi.object<Pick<CreateUserDto, 'email' | 'password'>>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const addCharacterScheme = Joi.object<CreateCharacterDto>({
  name: Joi.string().required(),
  characterId: Joi.string().required(),
  description: Joi.string().required(),
  thumbnailUri: Joi.string().required(),
  variantUri: Joi.string().required(),
  userId: Joi.string().required(),
});

export const removeCharacterScheme = Joi.object<Pick<CreateCharacterDto, 'userId' | 'characterId'>>({
  userId: Joi.string().required(),
  characterId: Joi.string().required(),
});

export const addComicScheme = Joi.object<CreateComicDto>({
  title: Joi.string().required(),
  comicId: Joi.string().required(),
  description: Joi.string().required(),
  thumbnailUri: Joi.string().required(),
  variantUri: Joi.string().required(),
  userId: Joi.string().required(),
});

export const removeComicScheme = Joi.object<Pick<CreateComicDto, 'userId' | 'comicId'>>({
  userId: Joi.string().required(),
  comicId: Joi.string().required(),
});

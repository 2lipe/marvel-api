import Joi from 'joi';

export const UserSchemas = {
  userSchemas: {
    userIdScheme: Joi.object({
      userId: Joi.string().required(),
    }),

    createUserSchema: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),

    updateUserSchema: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().allow(''),
      oldPassword: Joi.string().allow(''),
    }),

    sessionUserSchema: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },

  characterSchemas: {
    addCharacterScheme: Joi.object({
      name: Joi.string().required(),
      characterId: Joi.string().required(),
      description: Joi.string().required(),
      thumbnailUri: Joi.string().required(),
      variantUri: Joi.string().required(),
      userId: Joi.string().required(),
    }),

    removeCharacterScheme: Joi.object({
      userId: Joi.string().required(),
      characterId: Joi.string().required(),
    }),
  },

  comicSchemas: {
    addComicScheme: Joi.object({
      title: Joi.string().required(),
      comicId: Joi.string().required(),
      description: Joi.string().required(),
      thumbnailUri: Joi.string().required(),
      variantUri: Joi.string().required(),
      userId: Joi.string().required(),
    }),

    removeComicScheme: Joi.object({
      userId: Joi.string().required(),
      comicId: Joi.string().required(),
    }),
  },
};

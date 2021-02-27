import Joi from 'joi';

export const ComicSchemas = {
  getComicsScheme: Joi.object({
    userId: Joi.string().required(),
    searchParameter: Joi.string().required(),
  }),

  getComicCharacters: Joi.object({
    userId: Joi.string().required(),
  }),
};

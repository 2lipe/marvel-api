import Joi from 'joi';

export const CharacterSchemas = {
  getCharactersScheme: Joi.object({
    userId: Joi.string().required(),
    searchParameter: Joi.string().required(),
  }),

  getCharacterComicScheme: Joi.object({
    userId: Joi.string().required(),
  }),
};

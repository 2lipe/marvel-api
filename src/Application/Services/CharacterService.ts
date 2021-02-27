import { getCustomRepository } from 'typeorm';

import { ResponseMarvelDto } from '../Dtos/Marvel/ResponseMarvelDto';
import { genericError, HttpResponse, ok } from '../../Api/Helpers/http-error-helpers';
import { getMarvelApi, getMarvelApiBySearchParameter } from '../../Api/Helpers/marvel-fetch-helpers';
import { CharacterRepository } from '../../Infrastructure/Repositories/CharacterRepository';
import { ICharacterService } from '../Interfaces/Service/ICharacterService';
import { MarvelApiViewModel } from '../ViewModels/MarvelApiViewModel';
import { CHARACTER_MESSAGES } from '../../Api/Helpers/messages-helpers';
import { ComicRepository } from '../../Infrastructure/Repositories/ComicRepository';

export class CharacterService implements ICharacterService {
  public async getCharacters(userId: string, search: string): Promise<HttpResponse> {
    try {
      const characterRepository = getCustomRepository(CharacterRepository);

      const nameStartsWith = `nameStartsWith=${search}`;

      const response = await getMarvelApiBySearchParameter<ResponseMarvelDto>('characters', nameStartsWith);

      const characters = new MarvelApiViewModel(response.data);

      const favorites = await characterRepository.find({ where: { userId } });

      favorites.forEach(characterFavorite => {
        characters.results.forEach(character => {
          if (character.id.toString() === characterFavorite.characterId) character.favorite = true;
        });
      });

      return ok(characters, CHARACTER_MESSAGES.getSucess);
    } catch (err) {
      return genericError({}, 500, CHARACTER_MESSAGES.getFailure);
    }
  }

  public async getComicsCharacter(characterId: string, userId: string): Promise<HttpResponse> {
    try {
      const comicRepository = getCustomRepository(ComicRepository);

      const response = await getMarvelApi<ResponseMarvelDto>(`characters/${characterId}/comics`);

      const comics = new MarvelApiViewModel(response.data);

      const comicsFavorites = await comicRepository.find({ where: { userId } });

      comicsFavorites.forEach(comicFavorite => {
        comics.results.forEach(comic => {
          if (comic.id.toString() === comicFavorite.comicId) comic.favorite = true;
        });
      });

      return ok(comics, CHARACTER_MESSAGES.getSucess);
    } catch (err) {
      return genericError({}, 500, CHARACTER_MESSAGES.getFailure);
    }
  }
}

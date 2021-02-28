import { getCustomRepository } from 'typeorm';

import { ComicRepository } from '../../Infrastructure/Repositories/ComicRepository';
import { genericError, HttpResponse, ok } from '../../Api/Helpers/http-error-helpers';
import { ResponseMarvelDto } from '../Dtos/Marvel/ResponseMarvelDto';
import { IComicService } from '../Interfaces/Service/IComicService';
import { MarvelApiViewModel } from '../ViewModels/MarvelApiViewModel';
import { getMarvelApi, getMarvelApiBySearchParameter } from '../../Api/Helpers/marvel-fetch-helpers';
import { CHARACTER_MESSAGES, COMIC_MESSAGES } from '../../Api/Helpers/messages-helpers';
import { CharacterRepository } from '../../Infrastructure/Repositories/CharacterRepository';

export class ComicService implements IComicService {
  public async getComics(userId: string, search: string): Promise<HttpResponse> {
    try {
      const comicRepository = getCustomRepository(ComicRepository);

      const titleStartsWith = `titleStartsWith=${search}`;

      const response = await getMarvelApiBySearchParameter<ResponseMarvelDto>('comics', titleStartsWith);

      const comics = new MarvelApiViewModel(response.data);

      const favorites = await comicRepository.find({ where: { userId } });

      favorites.forEach(comicFavorite => {
        comics.results.forEach(comic => {
          if (comic.id.toString() === comicFavorite.comicId) comic.favorite = true;
        });
      });

      return ok(comics, COMIC_MESSAGES.getSuccess);
    } catch (err) {
      return genericError({}, 500, COMIC_MESSAGES.getFailure);
    }
  }

  public async getCharactersComic(comicId: string, userId: string): Promise<HttpResponse> {
    try {
      const characterRepository = getCustomRepository(CharacterRepository);

      const response = await getMarvelApi<ResponseMarvelDto>(`comics/${comicId}/characters`);

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
}

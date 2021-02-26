import { HttpResponse } from 'src/Helpers/http-error-helpers';

export interface IComicService {
  getComics(userId: string, search: string): Promise<HttpResponse>;
  getCharactersComic(comicId: string, userId: string): Promise<HttpResponse>;
}

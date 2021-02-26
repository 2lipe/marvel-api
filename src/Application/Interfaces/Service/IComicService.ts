import { HttpResponse } from 'src/Api/Helpers/http-error-helpers';

export interface IComicService {
  getComics(userId: string, search: string): Promise<HttpResponse>;
  getCharactersComic(comicId: string, userId: string): Promise<HttpResponse>;
}

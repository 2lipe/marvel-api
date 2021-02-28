import { HttpResponse } from '../../../Api/Helpers/http-error-helpers';

export interface ICharacterService {
  getCharacters(userId: string, search: string): Promise<HttpResponse>;
  getCharacterComics(characterId: string, userId: string): Promise<HttpResponse>;
}

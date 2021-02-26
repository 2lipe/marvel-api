import { HttpResponse } from 'src/Api/Helpers/http-error-helpers';

export interface ICharacterService {
  getCharacters(userId: string, search: string): Promise<HttpResponse>;
  getComicsCharacter(characterId: string, userId: string): Promise<HttpResponse>;
}

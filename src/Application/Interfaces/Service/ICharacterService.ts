import { HttpResponse } from 'src/Helpers/http-error-helpers';

export interface ICharacterService {
  getCharacters(userId: string, search: string): Promise<HttpResponse>;
  getComicsCharacter(characterId: string, userId: string): Promise<HttpResponse>;
}

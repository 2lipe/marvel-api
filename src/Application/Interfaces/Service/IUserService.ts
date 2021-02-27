import { CreateUserDto } from '../../../Application/Dtos/CreateUserDto';
import { UpdateUserDto } from '../../../Application/Dtos/UpdateUserDto';
import { CreateComicDto } from '../../../Application/Dtos/CreateComicDto';
import { CreateCharacterDto } from '../../../Application/Dtos/CreateCharacterDto';

import { HttpResponse } from '../../../Api/Helpers/http-error-helpers';

export interface IUserService {
  create(data: CreateUserDto): Promise<HttpResponse>;
  update(data: UpdateUserDto): Promise<HttpResponse>;
  session(email: string, password: string): Promise<HttpResponse>;

  addFavoriteComic(data: CreateComicDto): Promise<HttpResponse>;
  getFavoriteComic(userId: string): Promise<HttpResponse>;
  removeFavoriteComic(comicId: string, userId: string): Promise<HttpResponse>;

  addFavoriteCharacter(data: CreateCharacterDto): Promise<HttpResponse>;
  getFavoriteCharacter(userId: string): Promise<HttpResponse>;
  removeFavoriteCharacter(characterId: string, userId: string): Promise<HttpResponse>;
}

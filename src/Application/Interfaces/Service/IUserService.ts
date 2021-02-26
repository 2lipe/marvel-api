import { CreateUserDto } from 'src/Application/Dtos/CreateUserDto';
import { UpdateUserDto } from 'src/Application/Dtos/UpdateUserDto';
import { CreateComicDto } from 'src/Application/Dtos/CreateComicDto';
import { CreateCharacterDto } from 'src/Application/Dtos/CreateCharacterDto';

import { HttpResponse } from 'src/Api/Helpers/http-error-helpers';

export interface IUserService {
  create(data: CreateUserDto): Promise<HttpResponse>;
  update(data: UpdateUserDto): Promise<HttpResponse>;
  session(email: string, password: string): Promise<HttpResponse>;

  addFavoriteComic(data: CreateComicDto): Promise<HttpResponse>;
  getFavoriteComic(userId: string): Promise<HttpResponse>;
  removeFavoriteComic(comicId: string): Promise<HttpResponse>;

  addFavoriteCharacter(data: CreateCharacterDto): Promise<HttpResponse>;
  getFavoriteCharacter(userId: string): Promise<HttpResponse>;
  removeFavoriteCharacter(characterId: string): Promise<HttpResponse>;
}

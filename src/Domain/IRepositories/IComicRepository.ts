import { DeleteResult } from 'typeorm';

import { CreateComicDto } from '../../Application/Dtos/CreateComicDto';
import { ComicEntity } from '../Entities/ComicEntity';

export interface IComicRepository {
  createComic(data: CreateComicDto): Promise<ComicEntity>;

  deleteComic(comicId: string, userId: string): Promise<DeleteResult>;

  findComicById(id: string): Promise<ComicEntity | undefined>;
}

import { DeleteResult, EntityRepository, Repository } from 'typeorm';

import { CreateComicDto } from '../../Application/Dtos/CreateComicDto';
import { ComicEntity } from '../../Domain/Entities/ComicEntity';
import { IComicRepository } from '../../Domain/IRepositories/IComicRepository';

@EntityRepository(ComicEntity)
export class ComicRepository extends Repository<ComicEntity> implements IComicRepository {
  public async createComic(data: CreateComicDto): Promise<ComicEntity> {
    const { comicId, userId, title, description, variantUri, thumbnailUri } = data;

    const comic = this.create({
      comicId,
      userId,
      title,
      description,
      variantUri,
      thumbnailUri,
    });

    await this.save(comic);

    return comic;
  }

  public async deleteComic(comicId: string, userId: string): Promise<DeleteResult> {
    const res = await this.delete({ comicId, userId });

    return res;
  }

  public async findComicById(id: string): Promise<ComicEntity | undefined> {
    const comic = await this.findOne(id);

    return comic;
  }
}

import { getCustomRepository } from 'typeorm';

import { CreateComicDto } from '../../Application/Dtos/CreateComicDto';
import { CreateUserDto } from '../../Application/Dtos/CreateUserDto';
import { ComicRepository } from '../../Infrastructure/Repositories/ComicRepository';
import { UserRepository } from '../../Infrastructure/Repositories/UserRepository';

describe('ComicRepository', () => {
  it('SHOULD_BE_CREATE_COMIC', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'teste@gmail.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const comicRepository = getCustomRepository(ComicRepository);

    const userComicDto: CreateComicDto = {
      userId,
      comicId: '123',
      title: 'Marvel Comics Test',
      description: 'Should be pass test',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const userComic = await comicRepository.createComic(userComicDto);

    expect(userComic.title).toBe(userComicDto.title);
    expect(userComic.description).toBe(userComicDto.description);
    expect(userComic.thumbnailUri).toBe(userComicDto.thumbnailUri);
    expect(userComic.comicId).toBe(userComicDto.comicId);
  });

  it('SHOULD_BE_FIND_COMIC_BY_ID', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'marvel@gmail.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const comicRepository = getCustomRepository(ComicRepository);

    const userComicDto: CreateComicDto = {
      userId,
      comicId: '123',
      title: 'Marvel Comics Test',
      description: 'Should be pass test',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const comic = await comicRepository.createComic(userComicDto);
    const comicId = comic.id;
    const comicResult = await comicRepository.findComicById(comicId);

    expect(comicResult?.id).toBe(comicId);
  });

  it('SHOULD_BE_DELETE_COMIC', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'teste@teste.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const userComicRepository = getCustomRepository(ComicRepository);

    const userComicDto: CreateComicDto = {
      userId,
      comicId: '1235',
      title: 'Marvel Comics',
      description: 'Should be pass',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const userComic = await userComicRepository.createComic(userComicDto);
    const comicId = userComicDto.comicId;
    const userComicId = userComic.id;

    await userComicRepository.deleteComic(comicId, userId);
    const response = await userComicRepository.findComicById(userComicId);

    expect(response).toBeUndefined();
  });
});

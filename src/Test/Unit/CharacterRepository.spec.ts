import { getCustomRepository } from 'typeorm';

import { CreateCharacterDto } from '../../Application/Dtos/CreateCharacterDto';
import { CreateUserDto } from '../../Application/Dtos/CreateUserDto';
import { CharacterRepository } from '../../Infrastructure/Repositories/CharacterRepository';
import { UserRepository } from '../../Infrastructure/Repositories/UserRepository';

describe('CharacterRepository', () => {
  it('SHOULD_BE_CREATE_CHARACTER', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'teste@gmail.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const characterRepository = getCustomRepository(CharacterRepository);

    const userCharacterDto: CreateCharacterDto = {
      userId,
      characterId: '2701',
      name: 'Lobo',
      description: 'The best',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const character = await characterRepository.createCharacter(userCharacterDto);

    expect(character.name).toBe(userCharacterDto.name);
    expect(character.description).toBe(userCharacterDto.description);
    expect(character.thumbnailUri).toBe(userCharacterDto.thumbnailUri);
    expect(character.characterId).toBe(userCharacterDto.characterId);
  });

  it('SHOULD_BE_FIND_CHARACTER_BY_ID', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'marvel@gmail.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const characterRepository = getCustomRepository(CharacterRepository);

    const userCharacterDto: CreateCharacterDto = {
      userId,
      characterId: '2701',
      name: 'Lobo',
      description: 'The best',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const character = await characterRepository.createCharacter(userCharacterDto);
    const characterId = character.id;
    const characterResult = await characterRepository.findCharacterById(characterId);

    expect(characterResult?.id).toBe(characterId);
  });

  it('SHOULD_BE_DELETE_CHARACTER', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'marvel@delete.com',
      name: 'Teste',
      password: '456123',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const characterRepository = getCustomRepository(CharacterRepository);

    const userCharacterDto: CreateCharacterDto = {
      userId,
      characterId: '2701',
      name: 'Lobo',
      description: 'The best',
      variantUri: 'http://marvel.com',
      thumbnailUri: 'http://marvel.com',
    };

    const character = await characterRepository.createCharacter(userCharacterDto);
    const characterId = userCharacterDto.characterId;
    const userCharacterId = character.id;

    await characterRepository.deleteCharacter(characterId, userId);
    const response = await characterRepository.findCharacterById(userCharacterId);

    expect(response).toBeUndefined();
  });
});

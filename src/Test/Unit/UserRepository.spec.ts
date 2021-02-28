import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../../Infrastructure/Repositories/UserRepository';
import { CreateUserDto } from '../../Application/Dtos/CreateUserDto';
import { UpdateUserDto } from '../../Application/Dtos/UpdateUserDto';

describe('UserRepository', () => {
  it('SHOULD_BE_CREATE_USER', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'test@teste.com',
      name: 'Test',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);

    expect(user.name).toBe(userDto.name);
    expect(user.email).toBe(userDto.email);
    expect(user.password).toBe(userDto.password);
  });

  it('SHOULD_BE_UPDATE_USER', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'test@modified.com',
      name: 'Teste',
      password: '789456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;

    const userUpdateDto: Omit<UpdateUserDto, 'oldPassword'> = {
      id: userId,
      name: 'Teste',
      email: 'modified@gmail.com',
      password: 'teste',
    };

    await userRepository.updateUser(userUpdateDto);
    const userUpdated = await userRepository.findUserById(userId);

    expect(userUpdated?.email).toBe(userUpdateDto.email);
    expect(userUpdated?.name).toBe(userUpdateDto.name);
  });

  it('SHOULD_BE_FIND_USER_BY_ID', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'teste@teste.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userId = user.id;
    const userResult = await userRepository.findUserById(userId);

    expect(userResult?.id).toBe(userId);
  });

  it('SHOULD_BE_FIND_USER_BY_EMAIL', async () => {
    const userRepository = getCustomRepository(UserRepository);

    const userDto: CreateUserDto = {
      email: 'teste@gmail.com',
      name: 'Teste',
      password: '123456',
    };

    const user = await userRepository.createUser(userDto);
    const userEmail = user.email;
    const userFound = await userRepository.findUserByEmail(userEmail);

    expect(userFound?.email).toBe(userEmail);
  });
});

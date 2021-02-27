import { getCustomRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import { emailError, genericError, HttpResponse, ok, userNotExistError } from '../../Api/Helpers/http-error-helpers';
import { UserRepository } from '../../Infrastructure/Repositories/UserRepository';
import { IUserRepository } from '../../Domain/IRepositories/IUserRepository';
import { USER_MESSAGES } from '../../Api/Helpers/messages-helpers';

import { CreateCharacterDto } from '../Dtos/CreateCharacterDto';
import { CreateComicDto } from '../Dtos/CreateComicDto';
import { CreateUserDto } from '../Dtos/CreateUserDto';
import { UpdateUserDto } from '../Dtos/UpdateUserDto';
import { IUserService } from '../Interfaces/Service/IUserService';
import { generateJwtToken } from '../../Api/Helpers/jwt-helper';

export class UserService implements IUserService {
  public async create(data: CreateUserDto): Promise<HttpResponse> {
    try {
      const userRepository: IUserRepository = getCustomRepository(UserRepository);

      const checkUserExists = await userRepository.findUserByEmail(data.email);

      const userExists = checkUserExists !== undefined;
      if (userExists) emailError();

      const salt = 8;
      const hashedPassword = await hash(data.password, salt);

      const user = await userRepository.createUser({
        email: data.email,
        name: data.name,
        password: hashedPassword,
      });

      user.password = '';

      return ok(user, USER_MESSAGES.createSuccess);
    } catch (err) {
      return genericError({}, 500, USER_MESSAGES.createFailure);
    }
  }

  public async update(data: UpdateUserDto): Promise<HttpResponse> {
    try {
      const userRepository: IUserRepository = getCustomRepository(UserRepository);

      const user = await userRepository.findUserById(data.id);

      const userIsNotUdefined = user !== undefined;
      const userNotFound = !userIsNotUdefined;

      if (userNotFound) userNotExistError();

      const userWithUpdatedEmail = await userRepository.findUserByEmail(data.email);
      const emailIsUsed = userWithUpdatedEmail && userWithUpdatedEmail.id !== data.id;

      if (emailIsUsed) emailError();

      await userRepository.updateUser({
        email: data.email,
        name: data.name,
        id: data.id,
        password: data.password,
        oldPassword: '',
      });

      const oldPasswordIsNotPassed = data.password && !data.oldPassword;
      if (oldPasswordIsNotPassed) genericError({}, 400, USER_MESSAGES.oldPasswordNotPass);

      const passwordIsPassed = data.password && data.oldPassword;
      if (passwordIsPassed) {
        const checkOldPassword = await compare(data.oldPassword, user!.password);

        const oldPasswordDontCheck = !checkOldPassword;
        if (oldPasswordDontCheck) genericError({}, 400, USER_MESSAGES.invalidCredentials);

        const salt = 8;
        const newPassword = await hash(data.password, salt);

        await userRepository.updateUser({
          email: data.email,
          name: data.name,
          id: data.id,
          password: newPassword,
          oldPassword: '',
        });
      }

      return ok({}, USER_MESSAGES.userUpdated);
    } catch (err) {
      return genericError({}, 500, USER_MESSAGES.userUpdatedFailure);
    }
  }

  public async session(email: string, password: string): Promise<HttpResponse> {
    try {
      const userRepository: IUserRepository = getCustomRepository(UserRepository);

      const user = await userRepository.findUserByEmail(email);

      const userUndefined = user === undefined;
      if (userUndefined) userNotExistError();

      const comparePassword = await compare(password, user!.password);

      const passwordIncorrect = !comparePassword;
      if (passwordIncorrect) genericError({}, 401, USER_MESSAGES.invalidCredentials);

      const userName = user?.name;
      const token = generateJwtToken(user!.id);

      const res = {
        id: user?.id,
        email,
        userName,
        token,
      };

      return ok(res, USER_MESSAGES.sessionSucess);
    } catch (err) {
      return genericError({}, 500, USER_MESSAGES.sessionFailure);
    }
  }

  addFavoriteComic(data: CreateComicDto): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }

  getFavoriteComic(userId: string): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }

  removeFavoriteComic(comicId: string): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }

  addFavoriteCharacter(data: CreateCharacterDto): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }

  getFavoriteCharacter(userId: string): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }

  removeFavoriteCharacter(characterId: string): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }
}

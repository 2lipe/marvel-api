import { UpdateResult } from 'typeorm';

import { UserEntity } from '../Entities/UserEntity';
import { CreateUserDto } from '../../Application/Dtos/CreateUserDto';
import { UpdateUserDto } from '../../Application/Dtos/UpdateUserDto';

export interface IUserRepository {
  createUser(data: CreateUserDto): Promise<UserEntity>;

  updateUser(data: UpdateUserDto): Promise<UpdateResult>;

  findUserById(id: string): Promise<UserEntity | undefined>;

  findUserByEmail(email: string): Promise<UserEntity | undefined>;
}

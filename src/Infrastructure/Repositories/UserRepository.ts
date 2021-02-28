import { EntityRepository, Repository, UpdateResult } from 'typeorm';

import { CreateUserDto } from '../../Application/Dtos/CreateUserDto';
import { UpdateUserDto } from '../../Application/Dtos/UpdateUserDto';
import { UserEntity } from '../../Domain/Entities/UserEntity';
import { IUserRepository } from '../../Domain/IRepositories/IUserRepository';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> implements IUserRepository {
  public async createUser(data: CreateUserDto): Promise<UserEntity> {
    const { password, name, email } = data;

    const user = this.create({ name: name, email: email, password: password });

    await this.save(user);

    return user;
  }

  public async updateUser(data: Omit<UpdateUserDto, 'oldPassword'>): Promise<UpdateResult> {
    const { id, email, name, password } = data;

    const res = this.update({ id: id }, { email, name, password });

    return res;
  }

  public async findUserById(id: string): Promise<UserEntity | undefined> {
    const user = await this.findOne(id);

    return user;
  }

  public async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await this.findOne({ where: { email: email } });

    return user;
  }
}

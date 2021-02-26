import { CreateUserDto } from 'src/Application/Dtos/CreateUserDto';
import { UpdateUserDto } from 'src/Application/Dtos/UpdateUserDto';
import { UserEntity } from 'src/Domain/Entities/UserEntity';
import { IUserRepository } from 'src/Domain/IRepositories/IUserRepository';
import { EntityRepository, Repository, UpdateResult } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> implements IUserRepository {
  public async createUser(data: CreateUserDto): Promise<UserEntity> {
    const { password, name, email } = data;

    const user = this.create({ name: name, email: email, password: password });

    await this.save(user);

    return user;
  }

  updateUser(data: Omit<UpdateUserDto, 'oldPassword'>): Promise<UpdateResult> {
    const { id, email, name, password } = data;

    const res = this.update({ id: id }, { email: email, name: name, password: password });

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

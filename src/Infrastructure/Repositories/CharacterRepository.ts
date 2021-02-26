import { DeleteResult, EntityRepository, Repository } from 'typeorm';

import { CharacterEntity } from 'src/Domain/Entities/CharacterEntity';
import { ICharacterRepository } from 'src/Domain/IRepositories/ICharacterRepository';
import { CreateCharacterDto } from 'src/Application/Dtos/CreateCharacterDto';

@EntityRepository(CharacterEntity)
export class CharacterRepository extends Repository<CharacterEntity> implements ICharacterRepository {
  public async createCharacter(data: CreateCharacterDto): Promise<CharacterEntity> {
    const { characterId, userId, name, description, thumbnailUri, variantUri } = data;

    const character = this.create({
      characterId,
      userId,
      name,
      description,
      thumbnailUri,
      variantUri,
    });

    await this.save(character);

    return character;
  }

  public async deleteCharacter(characterId: string, userId: string): Promise<DeleteResult> {
    const res = await this.delete({ characterId, userId });

    return res;
  }

  public async findCharacterById(id: string): Promise<CharacterEntity | undefined> {
    const character = await this.findOne(id);

    return character;
  }
}

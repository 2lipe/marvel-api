import { DeleteResult } from 'typeorm';

import { CreateCharacterDto } from '../../Application/Dtos/CreateCharacterDto';
import { CharacterEntity } from '../Entities/CharacterEntity';

export interface ICharacterRepository {
  createCharacter(data: CreateCharacterDto): Promise<CharacterEntity>;

  deleteCharacter(characterId: string, userId: string): Promise<DeleteResult>;

  findCharacterById(id: string): Promise<CharacterEntity | undefined>;
}

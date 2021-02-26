import { Column, Entity, OneToMany } from 'typeorm';

import { ComicEntity } from './ComicEntity';
import { CharacterEntity } from './CharacterEntity';
import { BaseEntity } from './BaseEntity';

@Entity('User')
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CharacterEntity, character => character.user)
  character: CharacterEntity[];

  @OneToMany(() => ComicEntity, comic => comic.user)
  comic: ComicEntity[];
}

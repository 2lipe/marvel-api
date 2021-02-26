import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './BaseEntity';
import { UserEntity } from './UserEntity';

@Entity('Character')
export class CharacterEntity extends BaseEntity {
  @Column()
  characterId: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  thumbnailUri: string;

  @Column()
  variantUri: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, user => user.character)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

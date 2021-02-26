import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from './BaseEntity';
import { UserEntity } from './UserEntity';

@Entity('Comic')
export class ComicEntity extends BaseEntity {
  @Column()
  comicId: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  thumbnailUri: string;

  @Column()
  variantUri: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, user => user.comic)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from './UserEntity';

@Entity('Comic')
export class ComicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => UserEntity, user => user.comic)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

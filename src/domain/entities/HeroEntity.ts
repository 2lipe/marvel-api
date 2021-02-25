import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { UserEntity } from './UserEntity';

@Entity('Hero')
export class HeroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  heroId: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => UserEntity, user => user.hero)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

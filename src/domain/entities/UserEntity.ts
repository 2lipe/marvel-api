import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ComicEntity } from './ComicEntity';
import { HeroEntity } from './HeroEntity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => HeroEntity, hero => hero.user)
  hero: HeroEntity[];

  @OneToMany(() => ComicEntity, comic => comic.user)
  comic: ComicEntity[];
}

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('int', { default: 2 })
  statusId: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.tasks, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}

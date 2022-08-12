import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from '../task/task.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    // type: 'varchar',
    // length: 50,
  })
  first_name: string;

  @Column({
    nullable: false,
  })
  last_name: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column()
  age: number;

  @Column({
    nullable: true,
  })
  email: string;

  @OneToMany(() => TaskEntity, (task: TaskEntity) => task.user)
  tasks: TaskEntity[];
}

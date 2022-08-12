import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { taskDto } from '../task.dto';
import { TaskEntity } from '../task.entity';

@Injectable()
export class TaskServiceService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  async findAll() {
    const tasks = await this.taskRepository.find();
    return tasks;
  }
  async addOne(taskDto: taskDto) {
    const { title, statusId } = taskDto;
    const task = new TaskEntity();
    task.title = title;
    task.statusId = statusId ?? 2;
    await task.save();
    const allTasks = await this.findAll();
    return allTasks;
  }
  async deleteOne(id: number) {
    const record = await this.taskRepository.findOneBy({ id: id });
    await record.remove();
    const allTasks = await this.findAll();
    return allTasks;
  }
  async updateOne(id: number) {
    const record = await this.taskRepository.findOneBy({ id: id });
    if (record) {
      await this.taskRepository
        .createQueryBuilder()
        .update(record)
        .set({ statusId: 1 })
        .where('id = :id', { id: id })
        .execute();
    }

    const allTasks = await this.findAll();
    return allTasks;
  }
}

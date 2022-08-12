import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskServiceService } from '../task-service/task-service.service';
import { taskDto } from '../task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TaskControllerController {
  constructor(private readonly taskService: TaskServiceService) {}
  @Get()
  async findAll() {
    const tasks = await this.taskService.findAll();
    return tasks;
  }
  @Post()
  async addOne(@Body() TaskDto: taskDto) {
    const task = await this.taskService.addOne(TaskDto);
    return task;
  }
  @Delete(':taskId')
  deleteOne(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.deleteOne(taskId);
  }
}

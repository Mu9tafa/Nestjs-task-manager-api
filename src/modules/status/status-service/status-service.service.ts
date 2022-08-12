import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEntity } from '../status.entity';

@Injectable()
export class StatusServiceService {
  constructor(
    @InjectRepository(StatusEntity)
    private readonly statusRepository: Repository<StatusEntity>,
  ) {}

  async findAll() {
    const tasks = await this.statusRepository.find();
    return tasks;
  }
}

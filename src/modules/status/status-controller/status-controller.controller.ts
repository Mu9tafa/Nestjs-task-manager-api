import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatusServiceService } from '../status-service/status-service.service';

@Controller('status')
export class StatusControllerController {
  constructor(private readonly statusService: StatusServiceService) {}

  @Get()
  findAll() {
    return this.statusService.findAll();
  }
}

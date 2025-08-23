import { Controller, Get } from '@nestjs/common';
import { CronJobService } from './cron-job.service';

@Controller()
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Get()
  getHello(): string {
    return this.cronJobService.getHello();
  }
}

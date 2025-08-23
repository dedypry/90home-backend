import { Injectable } from '@nestjs/common';

@Injectable()
export class CronJobService {
  getHello(): string {
    return 'Hello World!';
  }
}

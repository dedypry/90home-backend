import { Test, TestingModule } from '@nestjs/testing';
import { CronJobController } from './cron-job.controller';
import { CronJobService } from './cron-job.service';

describe('CronJobController', () => {
  let cronJobController: CronJobController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronJobController],
      providers: [CronJobService],
    }).compile();

    cronJobController = app.get<CronJobController>(CronJobController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronJobController.getHello()).toBe('Hello World!');
    });
  });
});

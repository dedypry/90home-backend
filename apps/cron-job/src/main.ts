import { NestFactory } from '@nestjs/core';
import { CronJobModule } from './cron-job.module';

async function bootstrap() {
  const app = await NestFactory.create(CronJobModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

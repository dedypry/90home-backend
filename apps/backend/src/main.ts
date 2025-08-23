/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from 'configs/cors';
import { ValidationPipe } from 'middleware/pipes/validation.pipe';
import { HttpExceptionFilter } from 'middleware/exceptions/http.exception';
import { ResponseInterceptor } from 'middleware/interceptors/response.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: cors,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

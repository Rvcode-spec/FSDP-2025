import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const port = process.env.PORT || 3000;

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //✅ Enable global validation (DTO validation)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove extra fields
      forbidNonWhitelisted: true, // throw error if extra fields
      transform: true, // auto-convert to DTO types
    }),
  );

  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
});

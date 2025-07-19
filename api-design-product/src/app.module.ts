import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Users } from './users/user.entity';
console.log('DB_PASSWORD TYPE:', typeof process.env.DB_PASSWORD);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Users],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}

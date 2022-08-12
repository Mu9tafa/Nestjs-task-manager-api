import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { StatusModule } from './modules/status/status.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './modules/task/task.entity';
import { UserEntity } from './modules/user/user.entity';
import { StatusEntity } from './modules/status/status.entity';
import { LoggerMiddleware } from './middlewares/logger-middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      synchronize: true,
      entities: [TaskEntity, UserEntity, StatusEntity],
    }),
    UserModule,
    TaskModule,
    StatusModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/threads'), CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

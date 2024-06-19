import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { UsersPostsModule } from './users-posts/users-posts.module';

@Module({
  imports: [HttpModule, UsersPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

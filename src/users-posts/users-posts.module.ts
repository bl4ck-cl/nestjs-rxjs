import { Module } from '@nestjs/common';
import { UsersPostsController } from './users-posts.controller';
import { UsersPostsService } from './users-posts.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UsersPostsController],
  providers: [UsersPostsService]
})
export class UsersPostsModule {}

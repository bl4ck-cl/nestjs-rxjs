import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersPostsModule } from './users-posts/users-posts.module';

@Module({
  imports: [UsersPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

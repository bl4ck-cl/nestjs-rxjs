import { Controller, Get } from '@nestjs/common';
import { UsersPostsService } from './users-posts.service';
import { Observable } from 'rxjs';

@Controller('users-posts')
export class UsersPostsController {
constructor(private readonly appService: UsersPostsService) {}
    
  @Get('')
  getUserPost(): Observable<any> {
    return this.appService.getUserPost();
  }
}

import { Controller, Get } from '@nestjs/common';
import { UsersPostsService } from './users-posts.service';
import { Observable } from 'rxjs';
import { IUsersPosts } from './interface/jsonplaceholder-response.interface';

@Controller('users-posts')
export class UsersPostsController {
constructor(private readonly appService: UsersPostsService) {}
    
  @Get('')
  getUserPost(): Observable<IUsersPosts> {
    return this.appService.getUserPost();
  }
}

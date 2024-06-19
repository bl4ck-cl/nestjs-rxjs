import { Test, TestingModule } from '@nestjs/testing';
import { UsersPostsService } from './users-posts.service';

describe('UsersPostsService', () => {
  let service: UsersPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersPostsService],
    }).compile();

    service = module.get<UsersPostsService>(UsersPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

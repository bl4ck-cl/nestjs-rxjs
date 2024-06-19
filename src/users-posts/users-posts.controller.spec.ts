import { Test, TestingModule } from '@nestjs/testing';
import { UsersPostsController } from './users-posts.controller';

describe('UsersPostsController', () => {
  let controller: UsersPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPostsController],
    }).compile();

    controller = module.get<UsersPostsController>(UsersPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

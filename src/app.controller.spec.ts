import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment/comment.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CommentController],
      // providers: [MysqlRepository],
    }).compile();
  });

  describe('', () => {
    it('should return removed comment', () => {
      const commentController = app.get<CommentController>(CommentController);
      // expect(commentController.removeComment()).toBe('removed comment');
    });
  });
  // describe('getHello', () => {
  //   it('should return "Hello World!"', () => {
  //     const appController = app.get<PostController>(PostController);
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});

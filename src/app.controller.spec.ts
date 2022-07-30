import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { MysqlRepository } from './prismaMysql.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PostController],
      providers: [MysqlRepository],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<PostController>(PostController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

import { Module } from '@nestjs/common';
import { CommentRepositoryInterface } from '../comment.repository.interface.';
import { MysqlRepository } from './mysql.repository';

@Module({
  providers: [
    { provide: CommentRepositoryInterface, useClass: MysqlRepository },
  ],
  exports: [CommentRepositoryInterface],
})
export class MysqlModule {}

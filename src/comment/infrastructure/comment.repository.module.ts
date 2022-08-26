import { Module } from '@nestjs/common';
import { CommentRepositoryInterface } from '../core/comment.repository.interface';
import { CommentRepositoryMySql } from './comment.repository.mysql';

@Module({
  providers: [
    { provide: CommentRepositoryInterface, useClass: CommentRepositoryMySql },
  ],
  exports: [CommentRepositoryInterface],
})
export class CommentRepositoryModule {}

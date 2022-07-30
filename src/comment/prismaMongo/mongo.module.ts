import { Module } from '@nestjs/common';
import { CommentRepositoryInterface } from '../comment.repository.interface.';
import { MongoRepository } from './mongo.repository';

@Module({
  providers: [
    { provide: CommentRepositoryInterface, useClass: MongoRepository },
  ],
  exports: [CommentRepositoryInterface],
})
export class MongoModule {}

import { Module } from '@nestjs/common';
import { CommentRepositoryModule } from '../infrastructure/comment.repository.module';

@Module({
  imports: [CommentRepositoryModule],
  exports: [CommentRepositoryModule],
})
export class CommentModule {}

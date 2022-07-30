import { Module } from '@nestjs/common';
import { CommentRepositoryInterface } from '../comment.repository.interface.';
import { PrismaRepository } from './prisma.service';

@Module({
  providers: [
    { provide: CommentRepositoryInterface, useClass: PrismaRepository },
  ],
  exports: [CommentRepositoryInterface],
})
export class PrismaModule {}

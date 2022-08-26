import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Comment } from '../core/comment.entity';
import { CommentRepositoryInterface } from '../core/comment.repository.interface';

@Injectable()
export class CommentRepositoryMySql implements CommentRepositoryInterface {
  async addComment(postId: string, content: string): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.post.upsert({
      where: {
        id: postId,
      },
      update: {
        comments: {
          create: {
            content: content,
            author: { create: {} },
          },
        },
      },
      // When 0 comments on post
      create: {
        id: `${postId}`,
        comments: {
          create: {
            content: content,
            author: { create: {} },
          },
        },
      },
    });
  }
  async getComments(postId: string): Promise<string> {
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        comments: true,
      },
    });
    return JSON.stringify(post?.comments);
  }
}

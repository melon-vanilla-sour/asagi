import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CommentDto } from '../comment.dto';
import { CommentRepositoryInterface } from '../comment.repository.interface.';

@Injectable()
export class MongoRepository implements CommentRepositoryInterface {
  async postParent(postId: string, commentDto: CommentDto): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.post.upsert({
      where: {
        id: `${postId}`,
      },
      update: {
        comments: {
          create: {
            content: `${commentDto.content}`,
            author: { create: {} },
          },
        },
      },
      // When 0 comments on post
      create: {
        id: `${postId}`,
        comments: {
          create: {
            content: `${commentDto.content}`,
            author: { create: {} },
          },
        },
      },
    });
  }

  async postChild(): Promise<void> {
    await console.log('test');
  }

  async editContent(): Promise<void> {
    await console.log('test');
  }

  async togglePublished(): Promise<boolean> {
    return true;
  }

  async getPostComments(postId: string): Promise<string> {
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: {
        id: `${postId}`,
      },
      include: {
        comments: true,
      },
    });
    return JSON.stringify(post?.comments);
  }
}

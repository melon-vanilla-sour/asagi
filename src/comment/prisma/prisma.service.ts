import { Injectable } from '@nestjs/common';
import { PrismaClient, Comment } from '@prisma/client';
import { CommentDto } from '../comment.dto';

@Injectable()
export class PrismaRepository implements CommentRepositoryInterface {
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

  async postChild(
    postId: string,
    commentId: string,
    commentDto: CommentDto,
  ): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.comment.create({
      data: {
        content: `${commentDto.content}`,
        author: { create: {} },
        post: {
          connect: { id: postId },
        },
        parent: {
          connect: { id: Number.parseInt(commentId) },
        },
      },
    });
  }

  async editContent(
    postId: string,
    commentId: string,
    commentDto: CommentDto,
  ): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.comment.update({
      where: {
        id: Number.parseInt(commentId),
      },
      data: {
        content: `${commentDto.content}`,
        published: commentDto.published ?? false,
      },
    });
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

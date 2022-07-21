import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CommentDto } from './comment.dto';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

@Controller('posts/:id/comments')
export class CommentController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly appService: AppService) {}

  @Get()
  async getComments(@Param('id') id: string): Promise<string> {
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: {
        id: `${id}`,
      },
      include: {
        comments: true,
      },
    });
    return JSON.stringify(post?.comments);
  }

  @Post()
  async postComment(@Param('id') id: string, @Body() commentDto: CommentDto) {
    const prisma = new PrismaClient();
    await prisma.post.upsert({
      where: {
        id: `${id}`,
      },
      update: {
        comments: {
          create: { content: `${commentDto.content}`, author: { create: {} } },
        },
      },
      create: {
        id: `${id}`,
        comments: {
          create: { content: `${commentDto.content}`, author: { create: {} } },
        },
      },
    });
  }
}

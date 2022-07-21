import { Injectable, Res, Response } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const prisma = new PrismaClient();
    // await prisma.post.update({
    //   where: {
    //     id: 'dasfjk213lfda',
    //   },
    //   data: {
    //     comments: {
    //       create: { content: 'test' },
    //     },
    //   },
    // });

    await prisma.post.create({
      data: {
        id: 'dasfjk213lfda234',
        comments: {
          create: { content: 'ANOTHER POST', author: { create: {} } },
        },
      },
    });

    const allPosts = await prisma.post.findMany({
      include: {
        comments: true,
      },
    });

    return JSON.stringify(allPosts);
  }
}

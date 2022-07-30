import { Module } from '@nestjs/common';
import { CommentController } from './comment/comment.controller';
import { PrismaModule } from './comment/prisma/prisma.module';
import { Prisma } from '@prisma/client';

@Module({
  imports: [
    PrismaModule,
    // process.env.ORM == 'PRISMA' ? PrismaModule : TypeOrmModule,
    // process.env.DATABASE_PROVIDER == 'MYSQL' ? MysqlModule : MongoModule,
  ],
  controllers: [CommentController],
})
export class AppModule {}

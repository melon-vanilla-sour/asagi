import { Module } from '@nestjs/common';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/core/comment.module';

@Module({
  imports: [
    CommentModule,
    // process.env.ORM == 'PRISMA' ? PrismaModule : TypeOrmModule,
    // process.env.DATABASE_PROVIDER == 'MYSQL' ? MysqlModule : MongoModule,
  ],
  controllers: [CommentController],
})
export class AppModule {}

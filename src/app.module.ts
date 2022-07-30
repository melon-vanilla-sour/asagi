import { Module } from '@nestjs/common';
import { CommentController } from './comment/comment.controller';
import { MysqlModule } from './comment/prismaMysql/mysql.module';
import { MongoModule } from './comment/prismaMongo/mongo.module';

@Module({
  imports: [
    process.env.DATABASE_PROVIDER == 'MYSQL' ? MysqlModule : MongoModule,
  ],
  controllers: [CommentController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [AppService],
})
export class AppModule {}

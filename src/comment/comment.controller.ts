import { Controller, Get, Post, Put, Param, Body, Patch } from '@nestjs/common';
import { CommentDto } from './comment.dto';
// import { CommentRepositoryInterface } from './core/comment.repository.interface';
import { CommentRepositoryInterface } from './core/comment.repository.interface';
import { CommentService } from './core/comment.service';

@Controller('posts/:id/comments')
export class CommentController {
  constructor(
    private readonly commentRepositoryInterface: CommentRepositoryInterface,
    private readonly commentUseCase: CommentService,
  ) {}

  // @Get()
  // async getComments(@Param('id') postId: string): Promise<string> {
  //   return this.commentRepositoryInterface.getPostComments(postId);
  // }

  // @Post()
  // async postParent(
  //   @Param('id') postId: string,
  //   @Body() commentDto: CommentDto,
  // ) {
  //   const { content } = commentDto;
  //   return this.commentRepositoryInterface.postParent(postId, content);
  //   return this.commentUseCase.createParent();
  // }

  // @Post(':cid')
  // async postChild(
  //   @Param('id') postId: string,
  //   @Param('cid') commentId: string,
  //   @Body() commentDto: CommentDto,
  // ) {
  //   const { content } = commentDto;
  //   return this.commentRepositoryInterface.postChild(
  //     postId,
  //     commentId,
  //     content,
  //   );
  // }

  // @Patch(':cid')
  // async edit(
  //   @Param('id') postId: string,
  //   @Param('cid') commentId: string,
  //   @Body() commentDto: CommentDto,
  // ) {
  //   const { content, published = false } = commentDto;
  //   return this.commentRepositoryInterface.editContent(
  //     postId,
  //     commentId,
  //     content,
  //     published,
  //   );
  // }

  // @Post(':cid')
  // async postChildComment(@Params('cid') commentId: string) {
  // return this.CommentRepositoryInterface.
  // }

  // @

  // @Put()
  // async toggleCommentPublished(@Param('id') postId: string) {

  // }
}

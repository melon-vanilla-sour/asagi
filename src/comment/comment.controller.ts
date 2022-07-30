import { Controller, Get, Post, Put, Param, Body, Patch } from '@nestjs/common';
import { CommentDto } from './comment.dto';
import { CommentRepositoryInterface } from './comment.repository.interface.';

@Controller('posts/:id/comments')
export class CommentController {
  constructor(
    private readonly commentRepositoryInterface: CommentRepositoryInterface,
  ) {}

  @Get()
  async getComments(@Param('id') postId: string): Promise<string> {
    return this.commentRepositoryInterface.getPostComments(postId);
  }

  @Post()
  async postParent(
    @Param('id') postId: string,
    @Body() commentDto: CommentDto,
  ) {
    return this.commentRepositoryInterface.postParent(postId, commentDto);
  }

  @Post(':cid')
  async postChild(
    @Param('id') postId: string,
    @Param('cid') commentId: string,
    @Body() commentDto: CommentDto,
  ) {
    return this.commentRepositoryInterface.postChild(
      postId,
      commentId,
      commentDto,
    );
  }

  @Patch(':cid')
  async edit(
    @Param('id') postId: string,
    @Param('cid') commentId: string,
    @Body() commentDto: CommentDto,
  ) {
    return this.commentRepositoryInterface.editContent(
      postId,
      commentId,
      commentDto,
    );
  }

  // @Post(':cid')
  // async postChildComment(@Params('cid') commentId: string) {
  // return this.CommentRepositoryInterface.
  // }

  // @

  // @Put()
  // async toggleCommentPublished(@Param('id') postId: string) {

  // }
}

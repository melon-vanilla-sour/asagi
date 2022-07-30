import { CommentDto } from './comment.dto';

export abstract class CommentRepositoryInterface {
  abstract getPostComments(postId: string): Promise<string>;

  abstract postParent(postId: string, commentDto: CommentDto): Promise<void>;

  abstract postChild(
    postId: string,
    commentId: string,
    commentDto: CommentDto,
  ): Promise<void>;

  abstract editContent(
    postId: string,
    commentId: string,
    commentDto: CommentDto,
  ): Promise<void>;

  abstract togglePublished(): Promise<boolean>;
}

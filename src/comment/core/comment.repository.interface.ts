import { Comment } from './comment.entity';

export abstract class CommentRepositoryInterface {
  abstract addComment(postId: string, content: string): Promise<void>;
  abstract getComments(postId: string): Promise<string>;
  // abstract getComment(): Promise<Comment>;
  // abstract updateComment(): Promise<void>;
  // abstract deleteComment(): Promise<void>;
}

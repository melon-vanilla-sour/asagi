import { Comment } from './comment.entity';

export abstract class CommentRepositoryInterface {
  // put here if it interacts with the comments table?
  abstract addComment(postId: string, content: string): Promise<void>;
  abstract getComments(postId: string): Promise<string>;
  abstract getComments(authorId: string): Promise<string>;
  abstract getComments(parentId: string): Promise<string>;
  abstract getComment(commentId: number): Promise<Comment>;
  abstract updateComment(commentId: number, content: string): Promise<void>;
  // abstract deleteComment(): Promise<void>;
}

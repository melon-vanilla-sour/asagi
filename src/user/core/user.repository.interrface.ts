import { User } from './user.entity';

export abstract class CommentRepositoryInterface {
  abstract addUser(postId: string, content: string): Promise<void>;
  abstract getUsers(postId: string): Promise<string>;
  // abstract getU;
  abstract getUser(commentId: number): Promise<Comment>;
  abstract(commentId: number, content: string): Promise<void>;
  // abstract deleteComment(): Promise<void>;
}

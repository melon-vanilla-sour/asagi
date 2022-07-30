import { Comment } from './comment.entity';

export abstract class CommentRepositoryInterface {
  // abstract edit(commentId: string, content: string): Promise<void>;
  // abstract getByPost(postId: string): Promise<Comment[]>;
  // abstract getByUser(authorId: string): Promise<Comment[]>;
  // abstract getByParent(commentId: string): Promise<Comment[]>;
  // abstract delete(commentId: string): Promise<void>;
  // abstract togglePublished(commentId: string): Promise<void>;
  // abstract createParent(postId: string, content: string): Promise<void>;
  // abstract createChild(commentId: string, content: string): Promise<void>;
  abstract createComment(): Promise<void>;
  abstract getComments(): Promise<Comment[]>;
}

// these return a comment use case DTO?

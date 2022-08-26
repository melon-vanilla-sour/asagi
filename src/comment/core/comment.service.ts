import { Injectable } from '@nestjs/common';
import { CommentRepositoryInterface } from './comment.repository.interface';
import { Comment } from './comment.entity';

interface CreateCommentEntityPayload {
  content: string;
  published: boolean;
  postId: string;
  authorId: number;
  parentId: number | undefined;
}

export class CommentService {
  constructor(private readonly commentRepository: CommentRepositoryInterface) {}
  // edit(commentId: string, content: string): Promise<void> {}
  // getByPost(postId: string): Promise<Comment[]>;
  // getByUser(authorId: string): Promise<Comment[]>;
  // getByParent(commentId: string): Promise<Comment[]>;
  // delete(commentId: string): Promise<void>;
  // togglePublished(commentId: string): Promise<void> {}
  async createParent(payload: CreateCommentEntityPayload): Promise<void> {
    const comment: Comment = new Comment(payload);
    await this.commentRepository.addComment(payload.postId, payload.content);
  }
  // createChild(comment): Promise<void>;
}

// these return a comment use case DTO?

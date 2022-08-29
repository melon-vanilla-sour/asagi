import { Injectable } from '@nestjs/common';
import { CommentRepositoryInterface } from './comment.repository.interface';
import { Comment } from './comment.entity';

// Comment UseCases
interface CreateCommentEntityPayload {
  id: number;
  content: string;
  published: boolean;
  postId: string;
  authorId: number;
  parentId: number | undefined;
}

export class CommentService {
  // If it returns a comment entity, put it in the comment service (i think)
  constructor(private readonly commentRepository: CommentRepositoryInterface) {}
  // edit(commentId: string, content: string): Promise<void> {}
  async edit(commentId: number, content: string) {
    const comment: Comment = await this.commentRepository.getComment(commentId);
    comment.editContent(content);
    await this.commentRepository.updateComment(
      comment.getId(),
      comment.getContent()
    );
  }
  // async getByPost(postId: string): Promise<Comment[]> {
  // const post: Post = await this.getPostRepository.getPost(postId);
  // return post.getComments();
  // }

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

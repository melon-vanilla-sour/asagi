import { CommentRepositoryInterface } from '../comment.repository.interface.';

interface CreateCommentEntityPayload {
  content: string;
  published: boolean;
  postId: string;
  authorId: number;
  parentId: number | undefined;
}

export class Comment {
  private content: string;
  private published: boolean;
  private postId!: string;
  private parentId: number | undefined;
  private authorId!: number;
  private children!: Comment[];

  constructor(payload: CreateCommentEntityPayload) {
    this.content = payload.content;
    this.published = payload.published || false;
    this.postId = payload.postId;
    this.parentId = payload.parentId || undefined;
    this.authorId = payload.authorId;
    this.children = [];
  }

  public getChildren(): Comment[] {
    return this.children;
  }
}

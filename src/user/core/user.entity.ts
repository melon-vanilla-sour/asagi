import { Comment } from 'src/comment/core/comment.entity';

interface CreateUserEntityPayload {
  id: number;
  name: string;
}
export class User {
  private id!: number;
  private name!: string;
  private comments!: Comment[];

  constructor(payload: CreateUserEntityPayload) {
    this.id = payload.id;
    this.name = payload.name;
    this.comments = [];
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getComments() {
    return this.comments;
  }

  public addComment(comment: Comment) {
    this.comments.push(comment);
  }

  public removeComment(commentId: number) {
    this.comments = this.comments.filter((comment) => {
      comment.getId() != commentId;
    });
  }

  public equals(userId: number) {
    return this.id == userId;
  }
}

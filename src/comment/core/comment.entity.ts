interface CreateCommentEntityPayload {
  id: number;
  content: string;
  published: boolean;
  postId: string;
  authorId: number;
  parentId: number | undefined;
}

export class Comment {
  private id: number;
  private createdAt: Date | undefined;
  private updatedAt: Date | undefined;
  private content: string;
  private published: boolean;
  private postId!: string;
  private parentId: number | undefined;
  private authorId!: number;
  private children!: Comment[];

  constructor(payload: CreateCommentEntityPayload) {
    this.id = payload.id;
    this.content = payload.content;
    this.published = payload.published || false;
    this.postId = payload.postId;
    this.parentId = payload.parentId || undefined;
    this.authorId = payload.authorId;
    this.children = [];
  }

  public getId() {
    return this.id;
  }

  public setCreateDate(date: Date) {
    this.createdAt = date;
  }

  public setEditDate(date: Date) {
    this.updatedAt = date;
  }

  public getContent() {
    return this.content;
  }

  public editContent(content: string) {
    this.content = content;
  }

  public togglePublished() {
    this.published = !this.published;
  }

  public getPostId() {
    return this.postId;
  }

  public getParentId() {
    return this.parentId;
  }

  public get getAuthorId() {
    return this.authorId;
  }

  public getChildren(): Comment[] {
    return this.children;
  }

  public addChild(comment: Comment) {
    this.children.push(comment);
  }

  public removeChild(removeComment: Comment) {
    this.children = this.children.filter((childComment) => {
      childComment.id == removeComment.id;
    });
  }

  public equals(comment: Comment) {
    return this.id == comment.id;
  }
}

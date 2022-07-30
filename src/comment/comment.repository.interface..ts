export abstract class CommentRepositoryInterface {
  abstract getPostComments(postId: string): Promise<string>;

  abstract postParent(postId: string, content: string): Promise<void>;

  abstract postChild(
    postId: string,
    commentId: string,
    content: string,
  ): Promise<void>;

  abstract editContent(
    postId: string,
    commentId: string,
    content: string,
    published: boolean,
  ): Promise<void>;

  abstract togglePublished(): Promise<boolean>;
}

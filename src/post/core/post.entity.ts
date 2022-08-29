import { Comment } from 'src/comment/core/comment.entity';

export class Thread {
  content!: string;
  comments!: Comment[];
}

// Make new thread
// Delete thread
// Get thread

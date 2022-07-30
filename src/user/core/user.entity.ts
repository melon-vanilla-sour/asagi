import { Comment } from 'src/comment/core/comment.entity';

export class User {
  name: string | undefined;
  comments!: Comment[];
}

// get a list of all comments in a post
// Get a user
// Create User
// Delete User

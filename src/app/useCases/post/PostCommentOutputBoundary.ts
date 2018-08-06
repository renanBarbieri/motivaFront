export interface PostCommentOutputBoundary {

  onGetPostCommentSuccess(postOutput: PostCommentOutputModel);
  onAddCommentSuccess();

  onGetPostCommentError(err: any);
  onAddCommentError(err:any);
}

export class PostCommentOutputModel {
  comments: Array<PostComment>;
}

export class PostComment {
  avatar: string;
  user: string;
  username: string;
  date: Date;
  text: string;
}

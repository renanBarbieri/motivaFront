import {PostOutputBoundary} from "@app/useCases/post/PostOutputBoundary";
import {PostCommentOutputBoundary} from "@app/useCases/post/PostCommentOutputBoundary";

export interface PostInputBoundary {

  retrievePostData(postInputModel: PostInputModel, outputBoundary: PostOutputBoundary);

  retrievePostComments(postInputModel: PostInputModel, outputBoundary: PostCommentOutputBoundary);

  addPostComment(postCommentInputModel: PostCommentInputModel, outputBoundary: PostCommentOutputBoundary)
}

export class PostInputModel {
  postId: number;
  username: string;
}

export class PostCommentInputModel extends PostInputModel{
  comment: string;
}

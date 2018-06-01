import {PostOutputBoundary} from "@app/useCases/post/PostOutputBoundary";

export interface PostInputBoundary {

  retrievePostData(postInputModel: PostInputModel, outputBoundary: PostOutputBoundary)
}

export class PostInputModel {
  postId: number;
  username: string;
}

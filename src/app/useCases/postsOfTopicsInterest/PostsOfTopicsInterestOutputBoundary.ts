import {PostCardModel} from "@app/useCases/postsOfTopicsInterest/PostCardModel";

export interface PostsOfTopicsInterestOutputBoundary{
  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel);
  onPostsOfTopicsInterestError(errorData: any);
}

export class GetPostsOfTopicsInterestOutputModel{
  public tagPostsMap: Map<string, Array<PostCardModel>>;
}

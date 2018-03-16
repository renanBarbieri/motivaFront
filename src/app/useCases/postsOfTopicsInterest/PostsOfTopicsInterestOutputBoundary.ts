import PostItem from "@app/ui/models/PostItem";

export interface PostsOfTopicsInterestOutputBoundary{
  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel);
  onPostsOfTopicsInterestError(errorData: any);
}

export class GetPostsOfTopicsInterestOutputModel{
  public tagPostsMap: Map<string, Array<PostItem>>;
}

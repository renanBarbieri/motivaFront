import {PostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";

export interface PostsOfTopicsInterestInputBoundary {
  getPosts(requestData: PostsOfTopicsInterestInputModel, presenter: PostsOfTopicsInterestOutputBoundary)
}

export class PostsOfTopicsInterestInputModel {
  public tags: Map<number, string>;
}

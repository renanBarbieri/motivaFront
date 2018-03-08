import {GetPostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";

export interface GetPostsOfTopicsInterestInputBoundary{
  getTopics(requestData: GetPostsOfTopicsInterestInputModel, presenter: GetPostsOfTopicsInterestOutputBoundary)
}

export class GetPostsOfTopicsInterestInputModel {
  public tags: Map<number, string>;
}

import {ListPostsOutputBoundary} from "@app/useCases/listPosts/ListPostsOutputBoundary";

export interface ListPostsInputBoundary {
  getUserPosts(requestData: ListPostsInputModel, presenter: ListPostsOutputBoundary)

  getTagPosts(requestData: ListPostsInputModel, presenter: ListPostsOutputBoundary)
}

export class ListPostsInputModel {
  public identfier: string;
}

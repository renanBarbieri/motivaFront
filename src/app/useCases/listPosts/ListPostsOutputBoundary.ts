import PostItem from "@app/ui/models/PostItem";

export interface ListPostsOutputBoundary {
  onListPostsSuccess(responseData: ListPostsOutputModel);

  onListPostsError(errorData: any);
}

export class ListPostsOutputModel {
  public posts: Array<PostItem>;
}

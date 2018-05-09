import PostItem from "@app/ui/models/PostItem";
import TopicItem from "@app/ui/models/TopicItem";
import UserItem from "@app/ui/models/UserItem";

export interface SearchOutputBoundary {
  onSearchSuccess(result: SearchOutputModel);
}

export class SearchOutputModel{
  public tags: Array<TopicItem>;
  public users: Array<UserItem>;
  public posts: Array<PostItem>;
}

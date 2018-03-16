import PostItem from "@app/ui/models/PostItem";

export interface SearchOutputBoundary {
  onSearchSuccess(result: SearchOutputModel);
}

export class SearchOutputModel{
  public query: string;
  public tags: Array<TagSearchModel>;
  public users: Array<UserSearchOutputModel>;
  public posts: Array<PostSearchModel>;
}

export class PostSearchModel extends PostItem{}

export class UserSearchOutputModel{
  public entityReference: string;
  public username: string;
  public levelCompleted: number;
  public levelName: string;
  public profileImage: string;
}

export class TagSearchModel{
  entityReference: string;
  name: string;
}

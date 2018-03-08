import {PostCardModel} from "@app/useCases/postsOfTopicsInterest/PostCardModel";

export interface SearchOutputBoundary {
  onSearchSuccess(result: SearchOutputModel);
}

export class SearchOutputModel{
  public tags: Map<string, Array<TagSearchModel>>;
  public users: Array<UserSearchOutputModel>;
  public posts: Array<PostSearchModel>;
}

export class PostSearchModel extends PostCardModel{}

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

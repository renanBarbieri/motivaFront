import Post from "app/entity/Post";

export interface PostsOfTopicsInterestGateway{
  getPostsFromTag(tagId: string): Promise<Post[]>;
}

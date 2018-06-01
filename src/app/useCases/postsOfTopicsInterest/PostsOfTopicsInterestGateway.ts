import Post from "app/entity/Post";

export interface PostsOfTopicsInterestGateway {
  getPostsFromTag(auth: string, tagId: string): Promise<Post[]>;
}

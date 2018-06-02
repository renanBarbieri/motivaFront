import Post from "app/entity/Post";

export interface PostsOfTopicsInterestGateway {
  getPostsFromTag(auth: string, tagName: string): Promise<Post[]>;
}

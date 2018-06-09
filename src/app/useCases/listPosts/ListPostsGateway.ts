import Post from "app/entity/Post";

export interface ListPostsGateway {
  getPostsFromTag(auth: string, tagName: string): Promise<Post[]>;

  getPostsFromUser(auth: string, username: string): Promise<Post[]>;
}

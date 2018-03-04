import Post from "@app/entity/Post";

export interface PostDataSource{
  getPostsFromTag(tagId: string): Promise<Post[]>;
}

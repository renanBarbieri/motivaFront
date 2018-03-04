import Post from "@app/entity/Post";

export interface PostRepository{
  getPostsFromTag(tagId: string): Promise<Post[]>;
}

import Post from "@app/entity/Post";
import Comment from "@app/entity/Comment";

export interface PostGateway {

  getPost(authKey: string, username: string, postId: number): Promise<Post>;

  getPostComments(authKey: string, username: string, postId: number): Promise< Array<Comment> >;
}

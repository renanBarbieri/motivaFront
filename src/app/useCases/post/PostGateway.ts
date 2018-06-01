import Post from "@app/entity/Post";

export interface PostGateway {

  getPost(authKey: string, username: string, postId: number): Promise<Post>;
}

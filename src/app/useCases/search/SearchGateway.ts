import User from "@app/entity/User";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";

export interface SearchGateway {
  searchAnyContent(auth: string, query: string): Promise<[Array<User>, Array<Tag>, Array<Post>]>;
}

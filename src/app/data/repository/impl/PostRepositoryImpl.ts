import {PostDataSource} from "app/data/datasource/PostDataSource";
import PostApiDataSource from "app/data/datasource/impl/PostApiDataSource";
import Post from "app/entity/Post";
import {Injectable} from "@angular/core";

@Injectable()
export default class PostRepository implements PostDataSource{

  constructor(private articleApiDataSource:PostApiDataSource){}

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {
      let article: Post = await this.articleApiDataSource.get(id);

      resolve(article);
    });
  }


  getPostsFromTag(tagId: string): Promise<Post[]> {
    return null;
  }
}

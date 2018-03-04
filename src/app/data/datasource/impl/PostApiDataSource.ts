import Post from "@app/entity/Post";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostDataSource} from "@app/data/datasource/PostDataSource";

@Injectable()
export default class PostApiDataSource implements PostDataSource{

  constructor(private http: HttpClient){}

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {

      let article = new Post();

      article.title = "Sucesso";
      article.publishDate = "11/11/2017";

      resolve(article);
    });
  }


  getPostsFromTag(tagId: string): Promise<Post[]> {
    return null;
  }
}

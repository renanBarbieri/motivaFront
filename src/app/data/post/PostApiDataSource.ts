import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PostDataSource} from "app/data/post/PostDataSource";
import DataSourcePost from "app/data/model/DataSourcePost";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceConfig from "app/data/DataSourceConfig";

@Injectable()
export default class PostApiDataSource extends DataSourceConfig implements PostDataSource{

  constructor(protected http: HttpClient){
    super();
  }

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {

      let article = new Post();

      article.title = "Sucesso";
      article.publishDate = new Date();

      resolve(article);
    });
  }


  getPostsFromTag(authKey: string, tagId: string): Promise<DataSourcePost[]> {
    let headers = new HttpHeaders({
      "Authentication": authKey
    });

    let url = `${PostApiDataSource.dataSourceURL}/tag/${tagId}/posts`;
    let getPostsRequest = this.http.get<DataSourceResponse<DataSourcePost[]>>(url, {headers});

    return new Promise<DataSourcePost[]>(async (resolve, reject) => {

      getPostsRequest.subscribe( response => {
          console.log(response);

          if(response.status == "SUCCESS"){
            resolve(response.result)
          }
        }
      );
    });
  }
}
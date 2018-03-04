import PostApiDataSource from "app/data/datasource/impl/PostApiDataSource";
import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {PostRepository} from "@app/data/repository/PostRepository";
import DataSourcePost from "@app/data/model/DataSourcePost";
import PostDataSourceMapper from "@app/data/mapper/PostDataSourceMapper";

@Injectable()
export default class PostRepositoryImpl implements PostRepository{

  constructor(private articleApiDataSource:PostApiDataSource){}

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {
      let article: Post = await this.articleApiDataSource.get(id);

      resolve(article);
    });
  }


  getPostsFromTag(tagId: string): Promise<Post[]> {

    return new Promise<Post[]>(async (resolve, reject) => {
      let postMapper = new PostDataSourceMapper();
      let dataSourcePosts: DataSourcePost[] = await this.articleApiDataSource.getPostsFromTag("authKey", tagId);//TODO: pegar o authkey do cache
      let resultPosts: Post[] = Array();

      for(let dsPost of dataSourcePosts){
        resultPosts.push(postMapper.toEntity(dsPost))
      }

      resolve(resultPosts);
    });
  }
}

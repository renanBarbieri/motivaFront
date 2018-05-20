import PostApiDataSource from "app/data/post/PostApiDataSource";
import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {PostsOfTopicsInterestGateway} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestGateway";
import DataSourcePost from "app/data/model/DataSourcePost";
import PostDataSourceMapper from "app/data/mapper/PostDataSourceMapper";
import {PublishPostGateway} from "@app/useCases/publishPost/PublishPostGateway";
import {FileUploader} from "ng2-file-upload";

@Injectable()
export default class PostRepository implements PostsOfTopicsInterestGateway, PublishPostGateway{

  constructor(private articleApiDataSource:PostApiDataSource){}

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {
      let article: Post = await this.articleApiDataSource.get(id);

      resolve(article);
    });
  }


  getPostsFromTag(auth: string, tagId: string): Promise<Post[]> {

    return new Promise<Post[]>(async (resolve, reject) => {
      let postMapper = new PostDataSourceMapper();
      let dataSourcePosts: DataSourcePost[] = await this.articleApiDataSource.getPostsFromTag(auth, tagId);

      resolve(dataSourcePosts.map(function (it) {
        return postMapper.toEntity(it);
      }));
    });
  }


  getImageUploader(): FileUploader {
    return this.articleApiDataSource.getImageUploader();
  }


  postImage(): Promise<string> {
    return this.articleApiDataSource.publishImage();
  }
}

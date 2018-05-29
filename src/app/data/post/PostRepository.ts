import PostApiDataSource from "app/data/post/PostApiDataSource";
import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {PostsOfTopicsInterestGateway} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestGateway";
import DataSourcePost from "app/data/model/DataSourcePostCard";
import PostCardDataSourceMapper from "app/data/mapper/PostCardDataSourceMapper";
import {PublishPostGateway} from "@app/useCases/publishPost/PublishPostGateway";
import {FileUploader} from "ng2-file-upload";
import Tag from "@app/entity/Tag";
import TagDataSourceMapper from "@app/data/mapper/TagDataSourceMapper";
import DataSourceTag from "@app/data/model/DataSourceTag";
import PostDataSourceMapper from "@app/data/mapper/PostDataSourceMapper";

@Injectable()
export default class PostRepository implements PostsOfTopicsInterestGateway, PublishPostGateway{

  constructor(private postApiDataSource:PostApiDataSource){}

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {
      let article: Post = await this.postApiDataSource.get(id);

      resolve(article);
    });
  }


  getPostsFromTag(auth: string, tagId: string): Promise<Post[]> {

    return new Promise<Post[]>(async (resolve, reject) => {
      let postMapper = new PostCardDataSourceMapper();
      let dataSourcePosts: DataSourcePost[] = await this.postApiDataSource.getPostsFromTag(auth, tagId);

      resolve(dataSourcePosts.map( it =>
        postMapper.toEntity(it)
      ));
    });
  }

  getImageUploader(authKey: string): FileUploader {
    return this.postApiDataSource.getImageUploader(authKey);
  }


  postImage(auth: string): Promise<string> {
    return this.postApiDataSource.uploadImage();
  }


  async publishPost(auth: string, post: Post): Promise<number> {
    let postMapper = new PostDataSourceMapper();
    let publishDataSource = postMapper.toDataSource(post);
    let postPublished = await this.postApiDataSource.publishPost(auth, publishDataSource);
    return postPublished.id;
  }
}

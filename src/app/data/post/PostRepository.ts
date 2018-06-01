import PostApiDataSource from "app/data/post/PostApiDataSource";
import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {PostsOfTopicsInterestGateway} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestGateway";
import DataSourcePost from "app/data/model/DataSourcePost";
import DataSourcePostCard from "app/data/model/DataSourcePostCard";
import PostCardDataSourceMapper from "app/data/mapper/PostCardDataSourceMapper";
import {PublishPostGateway} from "@app/useCases/publishPost/PublishPostGateway";
import {FileUploader} from "ng2-file-upload";
import PostDataSourceMapper from "@app/data/mapper/PostDataSourceMapper";
import {PostGateway} from "@app/useCases/post/PostGateway";

@Injectable()
export default class PostRepository implements PostsOfTopicsInterestGateway, PublishPostGateway, PostGateway{

  constructor(private postApiDataSource:PostApiDataSource){}


  getPostsFromTag(auth: string, tagId: string): Promise<Post[]> {

    return new Promise<Post[]>(async (resolve, reject) => {
      let postMapper = new PostCardDataSourceMapper();
      let dataSourcePosts: DataSourcePostCard[] = await this.postApiDataSource.getPostsFromTag(auth, tagId);

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


  getPost(auth: string, username: string, postId: number): Promise<Post> {
    return new Promise<Post>( async (resolve) => {
      let postMapper = new PostDataSourceMapper();
      let dataSource = await this.postApiDataSource.get(auth, username, postId.toString());
      let post = postMapper.toEntity(dataSource);

      resolve(post);
    });

  }
}

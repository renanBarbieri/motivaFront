import DataSourcePost from "app/data/model/DataSourcePost";
import {FileUploader} from "ng2-file-upload";
import DataSourcePostCard from "@app/data/model/DataSourcePostCard";
import DataSourcePostComment from "@app/data/model/DataSourcePostComment";

export interface PostDataSource {
  get(authKey: string, username: string, postId: string): Promise<DataSourcePost>;

  getPostComments(authKey: string, username: string, postId: string): Promise<DataSourcePostComment[]>

  getPostsFromTag(authKey: string, tagId: string): Promise<DataSourcePostCard[]>;

  getPostsFromUser(authKey: string, username: string): Promise<DataSourcePostCard[]>;

  getImageUploader(authKey: string): FileUploader;

  uploadImage(): Promise<string>;

  publishPost(authKey: string, dataSourcePost: DataSourcePost): Promise<DataSourcePost>
}

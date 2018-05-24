import DataSourcePost from "app/data/model/DataSourcePost";
import {FileUploader} from "ng2-file-upload";

export interface PostDataSource{
  getPostsFromTag(authKey: string, tagId: string): Promise<DataSourcePost[]>;
  getImageUploader(authKey: string): FileUploader;
}

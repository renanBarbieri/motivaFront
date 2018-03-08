import DataSourcePost from "@app/data/model/DataSourcePost";

export interface PostDataSource{
  getPostsFromTag(authKey: string, tagId: string): Promise<DataSourcePost[]>;
}

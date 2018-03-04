import DataSourcePost from "@app/data/model/DataSourcePost";

export interface PostDataSource{
  getPostsFromTag(authKet: string, tagId: string): Promise<DataSourcePost[]>;
}

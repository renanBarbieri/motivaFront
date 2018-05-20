import DataSourceTag from "@app/data/model/DataSourceTag";

export interface TagDataSource{
  getTags(authKey: string): Promise<DataSourceTag[]>;
  saveCacheTag(tags: Array<DataSourceTag>);
  getCacheTag(): Promise<Array<DataSourceTag>>;
}

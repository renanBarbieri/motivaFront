import DataSourceSearch from "@app/data/model/DataSourceSearch";

export interface SearchDataSource{
  getSearchResult(authKey: string, query: string): Promise<DataSourceSearch>;
}

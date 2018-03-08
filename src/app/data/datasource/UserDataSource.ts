import DataSourceUser from "@app/data/model/DataSourceUser";

export interface UserDataSource{
  getData(id: string): Promise<DataSourceUser>;
}

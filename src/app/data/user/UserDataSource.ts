import DataSourceUser from "app/data/model/DataSourceUser";

export interface UserDataSource{
  getData(authKey: string): Promise<DataSourceUser>;
  getPublicData(authKey: string, username: string): Promise<DataSourceUser>;
}

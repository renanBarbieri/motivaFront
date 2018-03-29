import DataSourceUser from "app/data/model/DataSourceUser";
import DataSourceUserAuth from "@app/data/model/DataSourceUserAuth";

export interface UserDataSource{
  getData(id: string): Promise<DataSourceUser>;
  getDataWithAuth(username: string, password: string): Promise<DataSourceUserAuth>;
}

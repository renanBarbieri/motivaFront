import DataSourceAuth from "app/data/model/DataSourceAuth";
import DataSourceResponse from "@app/data/model/DataSourceResponse";

export interface AuthDataSource{
  setAuthKey(auth: string): Promise<DataSourceResponse<string>>;
  getAuthKey(): Promise<DataSourceAuth>;
}

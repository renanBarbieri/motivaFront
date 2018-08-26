import DataSourceLogin from "@app/data/model/DataSourceLogin";

export interface AuthApiSource {
  getAuthKey(username: string, password: string): Promise<DataSourceLogin>;

  changePassword(password: string, authKey: string): Promise<any>;
}

import DataSourceAuth from "app/data/model/DataSourceAuth";
import DataSourceResponse from "@app/data/model/DataSourceResponse";

export interface AuthCacheSource {
  setAuthKey(auth: string): Promise<DataSourceResponse<string>>;

  getAuthKey(): Promise<DataSourceAuth>;
}

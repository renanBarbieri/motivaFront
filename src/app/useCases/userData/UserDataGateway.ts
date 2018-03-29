import User from "app/entity/User";

export interface UserDataGateway{
  getStorageKey(): Promise<string>;
  getByKey(authKey: string): Promise<User>;
  getByLogin(username: string, password: string): Promise<User>;
}

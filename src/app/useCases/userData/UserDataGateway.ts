import User from "app/entity/User";

export interface UserDataGateway{
  getByKey(authKey: string): Promise<User>;
  getByLogin(username: string, password: string): Promise<[User, string]>;
}

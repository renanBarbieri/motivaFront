import User from "app/entity/User";

export interface UserDataGateway{
  get(authKey: string): Promise<User>;
  getPublicProfile(authkey: string): Promise<User>;
}

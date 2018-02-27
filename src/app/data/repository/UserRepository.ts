import User from "app/entity/User";

export interface UserRepository{
  get(authKey: string): Promise<User>;
}

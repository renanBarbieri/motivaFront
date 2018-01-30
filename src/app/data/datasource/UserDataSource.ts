import User from "@app/entity/User";

export interface UserDataSource{
  get(id: string): Promise<User>;
}

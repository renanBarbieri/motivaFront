import {UserDataSource} from "@app/data/datasource/UserDataSource";
import UsuarioApiDataSource from "@app/data/datasource/impl/UserApiDataSource";
import User from "@app/entity/User";
import {Injectable} from "@angular/core";

@Injectable()
export default class UserRepository implements UserDataSource{

  constructor(private userApiDataSource: UsuarioApiDataSource){}

  get(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user: User = await this.userApiDataSource.get(id);

      resolve(user);
    });
  }
}

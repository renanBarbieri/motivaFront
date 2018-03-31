import UserApiDataSource from "app/data/user/UserApiDataSource";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import DataSourceUser from "app/data/model/DataSourceUser";
import UserDataSourceMapper from "app/data/mapper/UserDataSourceMapper";
import {UserDataGateway} from "app/useCases/userData/UserDataGateway";
import DataSourceUserAuth from "app/data/model/DataSourceUserAuth";

@Injectable()
export default class UserRepository implements UserDataGateway{

  constructor(private userApiDataSource: UserApiDataSource){}

  getByKey(authKey: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user: DataSourceUser = await this.userApiDataSource.getData(authKey);

      let userMapper = new UserDataSourceMapper();
      resolve(userMapper.toEntity(user));
    });
  }

  getByLogin(username: string, password: string): Promise<[User, string]>{
    return new Promise<[User, string]>(async (resolve, reject) => {
      let user: DataSourceUserAuth = await this.userApiDataSource.getDataWithAuth(username, password);
      let userMapper = new UserDataSourceMapper();
      resolve([userMapper.toEntity(user), user.authkey]);
    });
  }
}
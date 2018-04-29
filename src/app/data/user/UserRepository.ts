import UserApiDataSource from "app/data/user/UserApiDataSource";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import DataSourceUser from "app/data/model/DataSourceUser";
import UserDataSourceMapper from "app/data/mapper/UserDataSourceMapper";
import {UserDataGateway} from "app/useCases/userData/UserDataGateway";

@Injectable()
export default class UserRepository implements UserDataGateway{

  constructor(private userApiDataSource: UserApiDataSource){}

  get(authKey: string): Promise<User> {
    return new Promise<User>(async (resolve) => {
      let user: DataSourceUser = await this.userApiDataSource.getData(authKey);

      let userMapper = new UserDataSourceMapper();
      resolve(userMapper.toEntity(user));
    });
  }


  getPublicProfile(authkey: string): Promise<User> {
    return null;
  }
}

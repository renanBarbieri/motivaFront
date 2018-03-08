import UsuarioApiDataSource from "app/data/datasource/user/UserApiDataSource";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import DataSourceUser from "app/data/model/DataSourceUser";
import UserDataSourceMapper from "app/data/mapper/UserDataSourceMapper";
import {UserDataGateway} from "app/useCases/userData/UserDataGateway";

@Injectable()
export default class UserRepository implements UserDataGateway{

  constructor(private userApiDataSource: UsuarioApiDataSource){}

  get(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user: DataSourceUser = await this.userApiDataSource.getData(id);

      let userMapper = new UserDataSourceMapper();
      resolve(userMapper.toEntity(user));
    });
  }
}

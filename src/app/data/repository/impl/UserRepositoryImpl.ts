import UsuarioApiDataSource from "app/data/datasource/impl/UserApiDataSource";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import DataSourceUser from "app/data/model/DataSourceUser";
import UserDataSourceMapper from "app/data/mapper/UserDataSourceMapper";
import {UserRepository} from "@app/data/repository/UserRepository";

@Injectable()
export default class UserRepositoryImpl implements UserRepository{

  constructor(private userApiDataSource: UsuarioApiDataSource){}

  get(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user: DataSourceUser = await this.userApiDataSource.getData(id);

      let userMapper = new UserDataSourceMapper();
      resolve(userMapper.toEntity(user));
    });
  }
}

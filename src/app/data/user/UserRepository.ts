import UsuarioApiDataSource from "app/data/user/UserApiDataSource";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import DataSourceUser from "app/data/model/DataSourceUser";
import UserDataSourceMapper from "app/data/mapper/UserDataSourceMapper";
import {UserDataGateway} from "app/useCases/userData/UserDataGateway";
import DataSourceUserAuth from "app/data/model/DataSourceUserAuth";
import AuthLocalDataSource from "@app/data/auth/AuthLocalDataSource";

@Injectable()
export default class UserRepository implements UserDataGateway{

  constructor(private userApiDataSource: UsuarioApiDataSource,
              private authLocalDataSource: AuthLocalDataSource){}

  getByKey(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user: DataSourceUser = await this.userApiDataSource.getData(id);

      let userMapper = new UserDataSourceMapper();
      resolve(userMapper.toEntity(user));
    });
  }

  getByLogin(username: string, password: string): Promise<User>{
    return new Promise<User>(async (resolve, reject) => {
      let user: DataSourceUserAuth = await this.userApiDataSource.getDataWithAuth(username, password);

      this.authLocalDataSource.setAuthKey(user.authkey)
        .then(() => {
          let userMapper = new UserDataSourceMapper();
          resolve(userMapper.toEntity(user));
        })
        .catch((error) => {
          reject(`Não foi possível pegar os dados do usuário: ${error.message}`);
        });
    });
  }
}

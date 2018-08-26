import {Injectable} from "@angular/core";
import {AuthGateway} from "@app/useCases/auth/AuthGateway";
import AuthLocalDataSource from "@app/data/auth/AuthLocalDataSource";
import AuthApiDataSource from "@app/data/auth/AuthApiDataSource";
import DataSourceLogin from "@app/data/model/DataSourceLogin";
import AuthToken from "@app/entity/AuthToken";

@Injectable()
export default class AuthRepository implements AuthGateway {

  constructor(private authLocalDataSource: AuthLocalDataSource,
              private authApiDataSource: AuthApiDataSource) {
  }

  setKey(key: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      await this.authLocalDataSource.setAuthKey(key)
        .then(() => resolve(true))
        .catch((error) => reject(`Não foi possível pegar os dados do usuário: ${error.message}`));
    });
  }

  getKey(): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      let localSrc = await this.authLocalDataSource.getAuthKey().catch(error => reject(error));
      if (localSrc) {
        resolve(localSrc.authkey);
      }
    });
  }

  generateKey(username: string, password: string): Promise<AuthToken> {
    return new Promise<AuthToken>(async (resolve, reject) => {
      try {
        let login: DataSourceLogin = await this.authApiDataSource.getAuthKey(username, password);
        resolve(
          new AuthToken(
            login.token,
            login.first_access
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  clearKey(): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      let localResponse = await this.authLocalDataSource.eraseAuthKey().catch(error => reject(error));
      resolve(true);
    });
  }

  changePassword(key: string, password: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      let serverResponse = await this.authApiDataSource.changePassword(password, key);
      if(serverResponse) {
        resolve(true);
      }
      else {
        resolve(false);
      }
    });
  }
}

import {Injectable} from "@angular/core";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceAuth from "app/data/model/DataSourceAuth";
import {AuthDataSource} from "@app/data/auth/AuthDataSource";
import {LocalStorage} from "@app/data/LocalStorage";

@Injectable()
export default class AuthLocalDataSource implements AuthDataSource{
  static STORAGE_KEY_AUTH = "authkey";

  setAuthKey(auth: string): Promise<DataSourceResponse<string>> {
    return new Promise<DataSourceResponse<string>>(async (resolve, reject) => {
      try{
        LocalStorage.set(AuthLocalDataSource.STORAGE_KEY_AUTH, auth);
        let response = new DataSourceResponse("SUCCESS", "");
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAuthKey(): Promise<DataSourceAuth> {
    return new Promise<DataSourceAuth>(async (resolve, reject) => {
      try {
        let result = LocalStorage.get(AuthLocalDataSource.STORAGE_KEY_AUTH);
        let response = new DataSourceAuth();
        console.log(`tenho uma chave guardada: ${result}`);
        response.authkey = result;
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

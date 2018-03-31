import {Injectable} from "@angular/core";
import {AuthGateway} from "@app/useCases/auth/AuthGateway";
import AuthLocalDataSource from "@app/data/auth/AuthLocalDataSource";

@Injectable()
export default class AuthRepository implements AuthGateway{

  constructor(private authLocalDataSource: AuthLocalDataSource){}

  setStorageKey(key: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      await this.authLocalDataSource.setAuthKey(key)
        .then(()=> resolve(true))
        .catch((error) => reject(`Não foi possível pegar os dados do usuário: ${error.message}`));
    });
  }

  getStorageKey(): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      let localSrc = await this.authLocalDataSource.getAuthKey().catch(error => reject(error) );
      if(localSrc){
        resolve(localSrc.authkey);
      }
    });
  }


  clearStorageKey(): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      let localResponse = await this.authLocalDataSource.eraseAuthKey().catch(error => reject(error) );
      resolve(true);
    });
  }
}

import {Injectable} from "@angular/core";
import {AuthApiSource} from "@app/data/auth/AuthApiSource";
import DataSourceResponse from "@app/data/model/DataSourceResponse";
import DataSourceConfig from "@app/data/DataSourceConfig";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import DataSourceLogin from "@app/data/model/DataSourceLogin";
import DataSourceUser from "@app/data/model/DataSourceUser";
import UserApiDataSource from "@app/data/user/UserApiDataSource";
import DataSourceLoggedUserResponse from "@app/data/model/DataSourceLoggedUserResponse";

@Injectable()
export default class AuthApiDataSource extends DataSourceConfig implements AuthApiSource {

  constructor(protected http: HttpClient) {
    super();
  }

  getAuthKey(username: string, password: string): Promise<DataSourceLogin> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let postRequest = this.http.post<DataSourceResponse<DataSourceLogin>>(
      `${AuthApiDataSource.dataSourceURL}/login`,
      {
        headers: headers,
        username: username,
        password: password
      }
    );


    return new Promise<DataSourceLogin>(async (resolve, reject) => {

      postRequest.subscribe(response => {
          console.log(response);

          if (response.status) {
            resolve(response.result)
          }
        },
        error => {
          reject(`Ocorreu o erro ${error.status}`);
        }
      );
    });
  }

  changePassword(password: string, authKey: string): Promise<any> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let postRequest = this.http.post<DataSourceResponse<any>>(
      `${AuthApiDataSource.dataSourceURL}/system/change_password`,
      {
        new_password: password
      },
      {
        headers: headers
      });

    return new Promise<any>(async (resolve, reject) => {

      postRequest.subscribe(response => {
          resolve();
        },
        error => {
          reject(error);
        }
      );
    });
  }
}

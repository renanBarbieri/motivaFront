import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceUser from "app/data/model/DataSourceUser";
import {UserDataSource} from "app/data/user/UserDataSource";
import DataSourceLoggedUserResponse from "@app/data/model/DataSourceLoggedUserResponse";
import DataSourcePublicUserResponse from "@app/data/model/DataSourcePublicUserResponse";

@Injectable()
export default class UserApiDataSource extends DataSourceConfig implements UserDataSource {

  constructor(protected http: HttpClient) {
    super();
  }

  getData(authKey: string): Promise<DataSourceUser> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let getRequest = this.http.get<DataSourceResponse<DataSourceLoggedUserResponse>>(
      UserApiDataSource.dataSourceURL.concat("/user"), {headers});

    return new Promise<DataSourceUser>(async (resolve, reject) => {

      getRequest.subscribe(response => {
          console.log(response);

          if (response.status) {
            resolve(response.result.logged_in_user)
          }
        },
        error => {
          console.log("erro http");
          reject(error);
        }
      );
    });
  }


  getPublicData(authKey: string, username: string): Promise<DataSourceUser> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let getRequest = this.http.get<DataSourceResponse<DataSourcePublicUserResponse>>(
      UserApiDataSource.dataSourceURL.concat(`/user/${username}`), {headers});

    return new Promise<DataSourceUser>(async (resolve, reject) => {

      getRequest.subscribe(response => {
          console.log(response);

          if (response.status) {
            resolve(response.result.user)
          }
        },
        error => {
          console.log("erro http");
          reject(error);
        }
      );
    });
  }
}

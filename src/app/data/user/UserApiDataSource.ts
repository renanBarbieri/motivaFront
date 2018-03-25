import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceUser from "app/data/model/DataSourceUser";
import {UserDataSource} from "app/data/user/UserDataSource";
import DataSourceUserAuth from "@app/data/model/DataSourceUserAuth";

@Injectable()
export default class UserApiDataSource extends DataSourceConfig implements UserDataSource{

  constructor(protected http: HttpClient){
    super();
  }

  getDataWithAuth(username: string, password: string): Promise<DataSourceUserAuth> {
    let headers = new HttpHeaders({
      "Authentication": btoa(`${username}:${password}`)
    });

    let getRequest = this.http.get<DataSourceResponse<DataSourceUserAuth>>(
      UserApiDataSource.dataSourceURL.concat("/user/auth"), {headers});

    return new Promise<DataSourceUserAuth>(async (resolve, reject) => {

      getRequest.subscribe( response => {
          console.log(response);

          if(response.status == "SUCCESS"){
            resolve(response.result)
          }
        }
      );
    });
  }

  getData(authKey: string): Promise<DataSourceUser>{
    let headers = new HttpHeaders({
      "Authentication": authKey
    });


    let getRequest = this.http.get<DataSourceResponse<DataSourceUser>>(UserApiDataSource.dataSourceURL.concat("/user"), {headers});

    return new Promise<DataSourceUser>(async (resolve, reject) => {

      getRequest.subscribe( response => {
          console.log(response);

          if(response.status == "SUCCESS"){
            resolve(response.result)
          }
        }
      );
    });
  }
}

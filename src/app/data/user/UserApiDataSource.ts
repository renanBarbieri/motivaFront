import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceUser from "app/data/model/DataSourceUser";
import {UserDataSource} from "app/data/user/UserDataSource";
import DataSourceUserAuth from "@app/data/model/DataSourceUserAuth";
import DataSourceLoggedUserResponse from "@app/data/model/DataSourceLoggedUserResponse";

@Injectable()
export default class UserApiDataSource extends DataSourceConfig implements UserDataSource{

  constructor(protected http: HttpClient){
    super();
  }

  getData(authKey: string): Promise<DataSourceUser>{
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let getRequest = this.http.get<DataSourceResponse<DataSourceLoggedUserResponse>>(
        UserApiDataSource.dataSourceURL.concat("/user"), {headers});

    return new Promise<DataSourceUser>(async (resolve, reject) => {

      getRequest.subscribe( response => {
          console.log(response);

          if(response.status){
            resolve(response.result.logged_in_user)
          }
        }
      );
    });
  }
}

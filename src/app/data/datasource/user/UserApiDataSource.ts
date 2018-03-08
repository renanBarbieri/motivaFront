import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceConfig from "app/data/datasource/DataSourceConfig";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceUser from "app/data/model/DataSourceUser";
import {UserDataSource} from "app/data/datasource/user/UserDataSource";

@Injectable()
export default class UserApiDataSource extends DataSourceConfig implements UserDataSource{

  constructor(protected http: HttpClient){
    super();
  }

  getData(authKey: string): Promise<DataSourceUser> {
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

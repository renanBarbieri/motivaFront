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

  getData(authKey: string): Promise<DataSourceUser>{
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });


    //TODO: saber como vai funcionar isso
    let getRequest = this.http.get<DataSourceResponse<DataSourceUser>>(UserApiDataSource.dataSourceURL.concat("/user/renan"), {headers});

    return new Promise<DataSourceUser>(async (resolve, reject) => {

      getRequest.subscribe( response => {
          console.log(response);

          if(response.status){
            resolve(response.result)
          }
        }
      );
    });
  }
}

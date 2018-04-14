import {Injectable} from "@angular/core";
import {AuthApiSource} from "@app/data/auth/AuthApiSource";
import DataSourceResponse from "@app/data/model/DataSourceResponse";
import DataSourceConfig from "@app/data/DataSourceConfig";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceLogin from "@app/data/model/DataSourceLogin";

@Injectable()
export default class AuthApiDataSource extends DataSourceConfig implements AuthApiSource{

  constructor(protected http: HttpClient){
    super();
  }

  getAuthKey(username: string, password: string): Promise<DataSourceLogin> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let getRequest = this.http.post<DataSourceResponse<DataSourceLogin>>(
      AuthApiDataSource.dataSourceURL.concat("/login"), {headers});

    return new Promise<DataSourceLogin>(async (resolve, reject) => {

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

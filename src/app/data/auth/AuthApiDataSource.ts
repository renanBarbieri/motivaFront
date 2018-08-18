import {Injectable} from "@angular/core";
import {AuthApiSource} from "@app/data/auth/AuthApiSource";
import DataSourceResponse from "@app/data/model/DataSourceResponse";
import DataSourceConfig from "@app/data/DataSourceConfig";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import DataSourceLogin from "@app/data/model/DataSourceLogin";

@Injectable()
export default class AuthApiDataSource extends DataSourceConfig implements AuthApiSource {

  constructor(protected http: HttpClient) {
    super();
  }

  getAuthKey(username: string, password: string): Promise<DataSourceLogin> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    console.log("oi");


    let params = new HttpParams()
                  .append("username", username)
                  .append("password", password);

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
            console.log("resolvi");
            resolve(response.result)
          }
        },
        error => {
          console.log("erro http");
          console.log(error);
          reject(`Ocorreu o erro ${error.status}`);
        }
      );
    });
  }
}

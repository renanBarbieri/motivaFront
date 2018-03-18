import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import DataSourceConfig from "app/data/datasource/DataSourceConfig";
import {SearchDataSource} from "@app/data/datasource/search/SearchDataSource";
import DataSourceSearch from "@app/data/model/DataSourceSearch";
import DataSourceResponse from "@app/data/model/DataSourceResponse";

@Injectable()
export default class SearchApiDataSource extends DataSourceConfig implements SearchDataSource{

  constructor(protected http: HttpClient){
    super();
  }


  getSearchResult(authKey: string, query: string): Promise<DataSourceSearch> {
    let headers = new HttpHeaders({
      "Authentication": authKey
    });

    let url = `${SearchApiDataSource.dataSourceURL}/search?q=${query}&limit=-1`;
    let getRequest = this.http.get<DataSourceResponse<DataSourceSearch>>(url, {headers});

    return new Promise<DataSourceSearch>(async (resolve, reject) => {

      getRequest.subscribe( response => {
          console.log(response);
          if(response.status == "SUCCESS"){
            resolve(response.result);
          }
          else{
            reject();
          }
        }
      );
    });
  }
}

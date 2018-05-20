import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourceTagResponse from "@app/data/model/DataSourceTagResponse";
import DataSourceTag from "@app/data/model/DataSourceTag";
import {TagDataSource} from "@app/data/tag/TagDataSource";

@Injectable()
export default class TagApiDataSource extends DataSourceConfig implements TagDataSource{

  constructor(protected http: HttpClient){ super(); }

  /**
   * Pega as tags registradas no servidor
   * @param {string} authKey
   * @returns {Promise<DataSourceTag[]>}
   */
  getTags(authKey: string) {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let url = `${TagApiDataSource.dataSourceURL}/tag`;
    let getTagsRequest = this.http.get<DataSourceResponse<DataSourceTagResponse>>(url, {headers});

    return new Promise<DataSourceTag[]>(async (resolve, reject) => {

      getTagsRequest.subscribe( response => {
          console.log(response);

          if(response.status){
            resolve(response.result.tags)
          }
        }
      );
    });
  }


  saveCacheTag(tags: Array<DataSourceTag>) {
  }


  getCacheTag(): Promise<Array<DataSourceTag>> {
    return null;
  }
}

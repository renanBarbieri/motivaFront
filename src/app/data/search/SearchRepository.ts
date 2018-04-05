import {Injectable} from "@angular/core";
import {SearchGateway} from "app/useCases/search/SearchGateway";
import User from "app/entity/User";
import Tag from "app/entity/Tag";
import Post from "app/entity/Post";
import SearchApiDataSource from "app/data/search/SearchApiDataSource";
import DataSourceSearch from "app/data/model/DataSourceSearch";
import SearchDataSourceMapper from "app/data/mapper/SearchDataSourceMapper";

@Injectable()
export default class SearchRepository implements SearchGateway{

  constructor(private searchApi: SearchApiDataSource){}

  searchAnyContent(auth: string, query: string): Promise<[Array<User>, Array<Tag>, Array<Post>]> {
    return new Promise<[Array<User>,Array<Tag>,Array<Post>]>(async (resolve, reject) => {
      let searchMapper = new SearchDataSourceMapper();
      let searchResult: DataSourceSearch =
        await this.searchApi.getSearchResult(auth, query);

      resolve(searchMapper.toEntity(searchResult));
    });
  }
}

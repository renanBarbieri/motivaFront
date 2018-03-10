import {Injectable} from "@angular/core";
import {SearchInputBoundary} from "@app/useCases/search/SearchInputBoundary";
import {SearchGateway} from "@app/useCases/search/SearchGateway";
import User from "@app/entity/User";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";
import SearchRepository from "@app/data/repository/SearchRepository";

@Injectable()
export default class SearchUseCase implements SearchInputBoundary{

  constructor(private searchRepository: SearchRepository){

  }

  async searchInput(input: string) {
    let search: [Array<User>, Array<Tag>, Array<Post>] = await this.searchRepository.searchAnyContent(input);

    let users: Array<User> = search[0];
    let tag: Array<Tag> = search[1];
    let posts: Array<Post> = search[2];
  }
}

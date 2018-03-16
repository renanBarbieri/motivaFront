import {Injectable} from "@angular/core";
import {SearchInputBoundary} from "@app/useCases/search/SearchInputBoundary";
import {SearchGateway} from "@app/useCases/search/SearchGateway";
import User from "@app/entity/User";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";
import SearchRepository from "@app/data/repository/SearchRepository";
import {
  PostSearchModel, SearchOutputBoundary, SearchOutputModel,
  TagSearchModel, UserSearchOutputModel
} from "@app/useCases/search/SearchOutputBoundary";

@Injectable()
export default class SearchUseCase implements SearchInputBoundary{

  constructor(private searchRepository: SearchRepository){

  }

  async searchInput(input: string, outputBoundary: SearchOutputBoundary) {
    let search: [Array<User>, Array<Tag>, Array<Post>] = await this.searchRepository.searchAnyContent(input);

    let users: Array<User> = search[0];
    let tags: Array<Tag> = search[1];
    let posts: Array<Post> = search[2];

    let searchOutput = new SearchOutputModel();
    searchOutput.query = input;

    searchOutput.tags = tags.map(function(it){
      let tagView = new TagSearchModel();
      tagView.entityReference = it.id.toString();
      tagView.name = it.name;
      return tagView;
    });

    searchOutput.users = users.map(function(it){
      let userView = new UserSearchOutputModel();
      userView.entityReference = it.id.toString();
      userView.username = it.name;
      userView.profileImage = it.avatar;
      return userView;
    });

    searchOutput.posts = posts.map(function(it){
      let postView = new PostSearchModel();
      postView.entityReference = it.id.toString();
      postView.articleImage = it.headerImage;
      postView.authorImage = it.owner.avatar;
      postView.author = it.owner.username;
      postView.title = it.title;
      postView.favorites = 2;
      postView.likes = 5;
      postView.publishDate = it.publishDate.toDateString();
      return postView;
    });


    outputBoundary.onSearchSuccess(searchOutput);
  }
}

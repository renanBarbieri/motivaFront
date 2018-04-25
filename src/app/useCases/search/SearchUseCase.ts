import {Injectable} from "@angular/core";
import {SearchInputBoundary} from "@app/useCases/search/SearchInputBoundary";
import User from "@app/entity/User";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";
import SearchRepository from "@app/data/search/SearchRepository";
import {SearchOutputBoundary, SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import PostItem from "@app/ui/models/PostItem";
import UserItem from "@app/ui/models/UserItem";
import TopicItem from "@app/ui/models/TopicItem";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class SearchUseCase implements SearchInputBoundary{

  constructor(private searchRepository: SearchRepository, private authRepository: AuthRepository){

  }

  async searchInput(input: string, outputBoundary: SearchOutputBoundary) {
    let tokenKey = await this.authRepository.getKey();
    let search: [Array<User>, Array<Tag>, Array<Post>] = await this.searchRepository.searchAnyContent(tokenKey, input);

    let users: Array<User> = search[0];
    let tags: Array<Tag> = search[1];
    let posts: Array<Post> = search[2];

    let searchOutput = new SearchOutputModel();

    searchOutput.tags = tags.map(function(it){
      let tagView = new TopicItem();
      tagView.entityReference = it.id.toString();
      tagView.name = it.name;
      return tagView;
    });

    searchOutput.users = users.map(function(it){
      let userView = new UserItem();
      userView.entityReference = it.username;
      userView.username = it.username;
      userView.avatar = it.avatar;
      return userView;
    });

    searchOutput.posts = posts.map(function(it){
      let postView = new PostItem();
      postView.entityReference = it.id.toString();
      postView.articleImage = it.headerImage;
      postView.authorImage = it.owner.avatar;
      postView.author = it.owner.username;
      postView.title = it.title;
      postView.favorites = it.favorites;
      postView.likes = it.likes;
      postView.publishDate = it.publishDate.toDateString();
      return postView;
    });

    outputBoundary.onSearchSuccess(searchOutput);
  }
}

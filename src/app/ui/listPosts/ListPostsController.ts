import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import ListPostsUseCase from "@app/useCases/listPosts/ListPostsUseCase";
import {ListPostsInputModel} from "@app/useCases/listPosts/ListPostsInputBoundary";
import {ListPostsOutputBoundary} from "@app/useCases/listPosts/ListPostsOutputBoundary";

@Injectable()
export default class ListPostsController extends LoggedPageController {

  constructor(private listPostsUseCase: ListPostsUseCase,
              private userListPosts: UserDataUseCase,
              private authListPosts: AuthUseCase,
              private routerListPosts: Router) {
    super(userListPosts, authListPosts, routerListPosts);
  }

  getTagPosts(responseHandler: ListPostsOutputBoundary, tag: string) {
    let requestData = new ListPostsInputModel();
    requestData.identfier = tag;
    this.listPostsUseCase.getTagPosts(requestData, responseHandler);
  }

  getUserPosts(responseHandler: ListPostsOutputBoundary, username: string) {
    let requestData = new ListPostsInputModel();
    requestData.identfier = username;
    this.listPostsUseCase.getUserPosts(requestData, responseHandler);
  }

  getResultsOfSearch(searchText: string) {
    console.log(searchText);
    this.routerListPosts.navigate(['/search', {q: searchText}]);
  }

  openPost(postId: string, username: string) {
    this.routerListPosts.navigate(["/post/".concat(username, "/", postId)]);
  }
}

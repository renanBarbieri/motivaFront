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
              private userHome: UserDataUseCase,
              private authHome: AuthUseCase,
              private routerHome: Router) {
    super(userHome, authHome, routerHome);
  }

  getTagPosts(responseHandler: ListPostsOutputBoundary, tag: string) {
    let requestData = new ListPostsInputModel();
    requestData.tag = tag;
    this.listPostsUseCase.getTagPosts(requestData, responseHandler);
  }

  getResultsOfSearch(searchText: string) {
    console.log(searchText);
    this.routerHome.navigate(['/search', {q: searchText}]);
  }

  openPost(postId: string, username: string) {
    this.routerHome.navigate(["/post/".concat(username, "/", postId)]);
  }
}

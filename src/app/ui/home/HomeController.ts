import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import AuthController from "@app/ui/auth/AuthController";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";

@Injectable()
export default class HomeController extends AuthController{

  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userDataUseCase: UserDataUseCase,
              private authParentCase: AuthUseCase,
              private routerChild: Router) {
    super(authParentCase, routerChild);
  }

  getUserData(authKey: string, responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    requestData.authKey = authKey;
    this.userDataUseCase.getUser(requestData, responseHandler);
  }

  getPostsOfTopicsOfInterest(responseHandler: PostsOfTopicsInterestOutputBoundary, topics: Map<number, string>){
    let requestData = new PostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.postsOfTopicsInterestUseCase.getTopics(requestData, responseHandler);
  }

  getResultsOfSearch(searchText: string){
    console.log(searchText);
    this.routerChild.navigate(['/search', { q: searchText}]);
  }

  goToProfile() {
    this.routerChild.navigate(['/user']);
  }

  goToFavorites() {
    this.routerChild.navigate(['/favorites']);
  }

  goToSettings() {
    this.routerChild.navigate(['/settings']);
  }
}

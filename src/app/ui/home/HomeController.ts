import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import {AuthOutputBoundary} from "@app/useCases/userData/AuthOutputBoundary";

@Injectable()
export default class HomeController{

  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userDataUseCase: UserDataUseCase,
              private router: Router) {}

  getUserData(responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    this.userDataUseCase.getUser(requestData, responseHandler);
  }

  getPostsOfTopicsOfInterest(responseHandler: PostsOfTopicsInterestOutputBoundary, topics: Map<number, string>){
    let requestData = new PostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.postsOfTopicsInterestUseCase.getTopics(requestData, responseHandler);
  }

  getResultsOfSearch(searchText: string){
    console.log(searchText);
    this.router.navigate(['/search', { q: searchText}]);
  }

  goToProfile() {
    this.router.navigate(['/user']);
  }

  goToFavorites() {
    this.router.navigate(['/favorites']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  makeLogout(responseHandler: AuthOutputBoundary) {
    this.userDataUseCase.performLogout(responseHandler);
  }
}

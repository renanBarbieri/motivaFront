import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";

@Injectable()
export default class HomeController extends LoggedPageController{

  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userHome: UserDataUseCase,
              private authHome: AuthUseCase,
              private routerHome: Router) {
    super(userHome, authHome, routerHome);
  }

  getPostsOfTopicsOfInterest(responseHandler: PostsOfTopicsInterestOutputBoundary, topics: Map<number, string>){
    let requestData = new PostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.postsOfTopicsInterestUseCase.getPosts(requestData, responseHandler);
  }

  getResultsOfSearch(searchText: string){
    console.log(searchText);
    this.routerHome.navigate(['/search', { q: searchText}]);
  }
}

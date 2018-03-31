import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";

@Injectable()
export default class HomeController extends LeftSideBarController{

  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userChild: UserDataUseCase,
              private authChild: AuthUseCase,
              private routerChild: Router) {
    super(userChild, authChild, routerChild);
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
}

import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {Injectable} from "@angular/core";
import HomeUseCase from "@app/useCases/home/HomeUseCase";
import {SearchOutputBoundary} from "@app/useCases/search/SearchOutputBoundary";

@Injectable()
export default class HomeController{

  constructor(private homeUseCase: HomeUseCase) {}

  onViewInit(presenter: HomeOutputBoundary) {
    this.getUserData(presenter);
  }

  getUserData(responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    requestData.userId = "id";
    this.homeUseCase.getUser(requestData, responseHandler);
  }

  getPostsOfTopicsOfInterest(responseHandler: PostsOfTopicsInterestOutputBoundary, topics: Map<number, string>){
    let requestData = new PostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.homeUseCase.getTopics(requestData, responseHandler);
  }

  getResultsOfSearch(responseOutput: SearchOutputBoundary, searchText: string){
    this.homeUseCase.searchInput(searchText, responseOutput);
  }
}

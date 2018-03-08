import {GetUserDataOutputBoundary} from "app/useCases/userData/GetUserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";
import {GetPostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestInputBoundary";
import {GetUserDataInputModel} from "app/useCases/userData/GetUserDataInputBoundary";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {Injectable} from "@angular/core";
import HomeUseCase from "@app/useCases/home/HomeUseCase";

@Injectable()
export default class HomeController{

  constructor(private homeUseCase: HomeUseCase) {}

  onViewInit(presenter: HomeOutputBoundary) {
    this.getUserData(presenter);
  }

  getUserData(responseHandler: GetUserDataOutputBoundary){
    let requestData = new GetUserDataInputModel();
    requestData.userId = "id";
    this.homeUseCase.getUser(requestData, responseHandler);
  }

  getPostsOfTopicsOfInterest(responseHandler: GetPostsOfTopicsInterestOutputBoundary, topics: Map<number, string>){
    let requestData = new GetPostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.homeUseCase.getTopics(requestData, responseHandler);
  }
}

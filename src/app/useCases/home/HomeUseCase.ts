import {HomeInputBoundary} from "app/useCases/home/HomeInputBoundary";
import {GetUserDataInputModel} from "app/useCases/userData/GetUserDataInputBoundary";
import {GetUserDataOutputBoundary} from "app/useCases/userData/GetUserDataOutputBoundary";
import {GetPostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestInputBoundary";
import {GetPostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";
import {Injectable} from "@angular/core";
import PostsOfTopicsInterestUseCase from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";

@Injectable()
export default class HomeUseCase implements HomeInputBoundary{
  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userDataUseCase: UserDataUseCase){}

  async getUser(requestData: GetUserDataInputModel, presenter: GetUserDataOutputBoundary) {
    this.userDataUseCase.getUser(requestData, presenter);
  }


  async getTopics(requestData: GetPostsOfTopicsInterestInputModel, presenter: GetPostsOfTopicsInterestOutputBoundary) {
    this.postsOfTopicsInterestUseCase.getTopics(requestData, presenter);
  }
}

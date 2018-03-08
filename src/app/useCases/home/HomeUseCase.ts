import {HomeInputBoundary} from "app/useCases/home/HomeInputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {Injectable} from "@angular/core";
import PostsOfTopicsInterestUseCase from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import SearchUseCase from "@app/useCases/search/SearchUseCase";

@Injectable()
export default class HomeUseCase implements HomeInputBoundary{
  constructor(private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase,
              private userDataUseCase: UserDataUseCase,
              private searchUseCase: SearchUseCase){}

  async getUser(requestData: UserDataInputModel, presenter: UserDataOutputBoundary) {
    this.userDataUseCase.getUser(requestData, presenter);
  }


  async getTopics(requestData: PostsOfTopicsInterestInputModel, presenter: PostsOfTopicsInterestOutputBoundary) {
    this.postsOfTopicsInterestUseCase.getTopics(requestData, presenter);
  }

  async searchInput(input: string) {
    this.searchUseCase.searchInput(input);
  }
}

import LoggedPageController from "@app/ui/logged/LoggedPageController";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import {Injectable} from "@angular/core";
import {PostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {PostsOfTopicsInterestInputModel} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import PostsOfTopicsInterestUseCase from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import {UserDataInputModel} from "@app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";

@Injectable()
export default class ProfileController extends LoggedPageController {

  constructor(private userProfile: UserDataUseCase,
              private authProfile: AuthUseCase,
              private routerProfile: Router,
              private postsOfTopicsInterestUseCase: PostsOfTopicsInterestUseCase) {
    super(userProfile, authProfile, routerProfile);
  }

  getProfileData(outputBoundary: UserDataOutputBoundary, username?: string) {
    console.log(username);
    let requestData = new UserDataInputModel();
    requestData.username = username;
    this.userProfile.getPublicUser(requestData, outputBoundary);
  }


  getPostsOfTopics(responseHandler: PostsOfTopicsInterestOutputBoundary, topics: Map<number, string>) {
    let requestData = new PostsOfTopicsInterestInputModel();
    requestData.tags = topics;
    this.postsOfTopicsInterestUseCase.getPosts(requestData, responseHandler);
  }


  getResultsOfSearch(searchText: string) {
    this.routerProfile.navigate(['/search', {q: searchText}]);
  }

}

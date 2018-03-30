import {HomeUiView} from "app/ui/home/HomeUIView";
import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/userData/AuthOutputBoundary";
import {Router} from "@angular/router";

@Injectable()
export default class HomePresenter implements UserDataOutputBoundary, PostsOfTopicsInterestOutputBoundary, AuthOutputBoundary{
  private view: HomeUiView;

  constructor(private router: Router){}

  onViewInit(view: HomeUiView) {
    this.view = view;
  }

  onAuthLogoutSuccess(responseData: AuthOutputModel) {
    this.router.navigate(["/"], {replaceUrl: true});
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }


  onAuthLogoutError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    console.log("Presenter");
    this.view.updateTopicList(responseData.tagPostsMap)

  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

}

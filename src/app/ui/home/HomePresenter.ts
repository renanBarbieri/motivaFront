import {HomeUiView} from "app/ui/home/HomeUIView";
import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";

@Injectable()
export default class HomePresenter extends AuthPresenter implements UserDataOutputBoundary, PostsOfTopicsInterestOutputBoundary{
  private homeUiView: HomeUiView;

  onViewInit(view: HomeUiView) {
    super.onViewInit(view);
    this.homeUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.homeUiView.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.homeUiView.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    console.log("Presenter");
    this.homeUiView.updateTopicList(responseData.tagPostsMap)

  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.homeUiView.showErrorAlert(errorData.message);
  }

}

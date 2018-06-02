import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {ViewPostsUiView} from "@app/ui/viewPosts/ViewPostsUIView";

@Injectable()
export default class ViewPostsPresenter extends AuthPresenter implements UserDataOutputBoundary, PostsOfTopicsInterestOutputBoundary {
  private homeUiView: ViewPostsUiView;

  onViewInit(view: ViewPostsUiView) {
    super.onViewInit(view);
    this.homeUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.homeUiView.updateUserData(responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.homeUiView.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    console.log("Presenter");
    // this.homeUiView.updateTopicList(responseData.tagPostsMap)

  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.homeUiView.showErrorAlert(errorData.message);
  }

}

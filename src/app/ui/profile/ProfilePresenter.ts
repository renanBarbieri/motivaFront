import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {UserDataOutputBoundary, UserDataOutputModel} from "@app/useCases/userData/UserDataOutputBoundary";
import {ProfileUIView} from "@app/ui/profile/ProfileUIView";
import {
  GetPostsOfTopicsInterestOutputModel,
  PostsOfTopicsInterestOutputBoundary
} from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";

export default class ProfilePresenter extends AuthPresenter implements UserDataOutputBoundary,
  PostsOfTopicsInterestOutputBoundary, AuthOutputBoundary {

  private profileUiView: ProfileUIView;

  onViewInit(view: ProfileUIView) {
    super.onViewInit(view);
    this.profileUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    if (responseData.publicProfile) {
      this.onProfileDataSuccess(responseData);
    }
    else {
      this.profileUiView.updateUserData(responseData.username, responseData.levelCompleted,
        responseData.levelName, responseData.profileImage,
        responseData.rewards, responseData.tags);
    }
  }

  onProfileDataSuccess(responseData: UserDataOutputModel) {
    this.profileUiView.updateProfileData(responseData.username, responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    this.profileUiView.updateTopicList(responseData.tagPostsMap)
  }

  onUserDataError(errorData: any) {
    this.profileUiView.showErrorAlert(errorData.message);
  }

  onProfileDataError(errorData: any) {
    this.profileUiView.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.profileUiView.showErrorAlert(errorData.message);
  }

}

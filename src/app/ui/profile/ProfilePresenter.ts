import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {UserDataOutputBoundary, UserDataOutputModel} from "@app/useCases/userData/UserDataOutputBoundary";
import {ProfileUIView} from "@app/ui/profile/ProfileUIView";

export default class ProfilePresenter extends AuthPresenter implements UserDataOutputBoundary{

  private profileUiView: ProfileUIView;

  onViewInit(view: ProfileUIView) {
    super.onViewInit(view);
    this.profileUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.profileUiView.updateUserData( responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.profileUiView.showErrorAlert(errorData.message);
  }
}

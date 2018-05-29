import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {ViewPostUiView} from "@app/ui/viewPost/ViewPostUIView";

@Injectable()
export default class ViewPostPresenter extends AuthPresenter implements UserDataOutputBoundary,
    AuthOutputBoundary{
  private viewPostUiView: ViewPostUiView;

  onViewInit(view: ViewPostUiView) {
    super.onViewInit(view);
    this.viewPostUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.viewPostUiView.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.viewPostUiView.showErrorAlert(errorData.message);
  }
}

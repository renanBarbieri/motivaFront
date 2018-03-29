import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthUiView} from "@app/ui/auth/AuthUIView";

@Injectable()
export default class AuthPresenter implements UserDataOutputBoundary{
  private view: AuthUiView;

  onViewInit(view: AuthUiView) {
    this.view = view;
  }


  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateLoggedStatus(true);
  }

  onUserDataError(errorData: any) {
    this.view.updateLoggedStatus(false);
    // this.view.showErrorAlert(errorData.message);
  }

}

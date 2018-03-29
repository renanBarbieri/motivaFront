import {Injectable} from "@angular/core";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {LoginUiView} from "@app/ui/login/LoginUIView";

@Injectable()
export default class LoginPresenter implements UserDataOutputBoundary{
  private view: LoginUiView;

  onViewInit(view: LoginUiView) {
    this.view = view;
  }


  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.onLoggingSuccess();
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

}

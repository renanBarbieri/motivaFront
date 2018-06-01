import {Injectable} from "@angular/core";
import {LoginUiView} from "@app/ui/login/LoginUIView";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";

@Injectable()
export default class LoginPresenter implements AuthOutputBoundary {
  private view: LoginUiView;

  onViewInit(view: LoginUiView) {
    this.view = view;
  }


  onAuthSuccess(responseData: AuthOutputModel) {
    this.view.onLoggingSuccess();
  }

  onAuthError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

}

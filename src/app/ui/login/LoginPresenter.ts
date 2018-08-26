import {Injectable} from "@angular/core";
import {LoginUiView} from "@app/ui/login/LoginUIView";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthPasswordOutputBoundary, AuthPasswordOutputModel} from "@app/useCases/auth/AuthPasswordOutputBoundary";

@Injectable()
export default class LoginPresenter implements AuthOutputBoundary, AuthPasswordOutputBoundary {
  private view: LoginUiView;

  onViewInit(view: LoginUiView) {
    this.view = view;
  }


  onAuthSuccess(responseData: AuthOutputModel) {
    if(responseData.firstLogin){
      this.view.onFirstLogin()
    }
    else {
      this.view.onLoggingSuccess();
    }
  }

  onAuthPasswordSuccess(responseData: AuthPasswordOutputModel) {
  }

  onAuthError(errorData: any) {
    this.view.showErrorAlert(errorData);
  }

}

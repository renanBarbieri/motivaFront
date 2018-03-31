import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {AuthUiView} from "@app/ui/auth/AuthUIView";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";

@Injectable()
export default class AuthPresenter implements AuthOutputBoundary{
  private view: AuthUiView;

  onViewInit(view: AuthUiView) {
    this.view = view;
  }

  onAuthSuccess(responseData: AuthOutputModel) {
    if(responseData.logged) this.view.updateLoggedStatus(true, responseData.message);
    else this.view.updateLoggedStatus(false);
  }

  onAuthError(errorData: any) {
    this.view.updateLoggedStatus(false);
  }

}
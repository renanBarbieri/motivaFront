import {Injectable} from "@angular/core";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {AuthInputModel} from "@app/useCases/auth/AuthInputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthPasswordOutputBoundary} from "@app/useCases/auth/AuthPasswordOutputBoundary";

@Injectable()
export default class LoginController {

  constructor(private authUseCase: AuthUseCase) {
  }

  makeLogin(username: string, password: string, responseHandler: AuthOutputBoundary) {
    let requestData = new AuthInputModel();
    requestData.username = username;
    requestData.password = password;
    this.authUseCase.performLogin(requestData, responseHandler);
  }

  updatePassword(newPassword: string, responseHandler: AuthPasswordOutputBoundary) {
    let requestData = new AuthInputModel();
    requestData.password = newPassword;
    this.authUseCase.performChangePassword(requestData, responseHandler);
  }
}

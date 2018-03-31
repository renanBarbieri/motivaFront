import {Injectable} from "@angular/core";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";

@Injectable()
export default class AuthController{

  constructor(private authUseCase: AuthUseCase) {}

  verifyAuthorization(responseHandler: AuthOutputBoundary){
    this.authUseCase.performAuthValidation(responseHandler);
  }

  makeLogout(responseHandler: AuthOutputBoundary){
    this.authUseCase.performLogout(responseHandler);
  }
}

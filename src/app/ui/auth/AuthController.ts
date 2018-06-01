import {Injectable} from "@angular/core";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {Router} from "@angular/router";

@Injectable()
export default class AuthController {

  constructor(private authUseCase: AuthUseCase, private router: Router) {
  }

  verifyAuthorization(responseHandler: AuthOutputBoundary) {
    this.authUseCase.performAuthValidation(responseHandler);
  }

  makeLogout(responseHandler: AuthOutputBoundary) {
    this.authUseCase.performLogout(responseHandler);
  }

  redirectToLogin() {
    this.router.navigate(["/"], {replaceUrl: true});
  }
}

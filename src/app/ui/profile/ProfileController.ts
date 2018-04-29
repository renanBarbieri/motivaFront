import LoggedPageController from "@app/ui/logged/LoggedPageController";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import {Injectable} from "@angular/core";

@Injectable()
export default class ProfileController extends LoggedPageController {

  constructor(private userHome: UserDataUseCase,
              private authHome: AuthUseCase,
              private routerHome: Router) {
    super(userHome, authHome, routerHome);
  }

}

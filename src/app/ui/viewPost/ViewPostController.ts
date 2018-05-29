import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";

@Injectable()
export default class ViewPostController extends LoggedPageController{

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }
}

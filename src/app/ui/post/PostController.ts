import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";
import LoggedPageController from "@app/ui/logged/LoggedPageController";

@Injectable()
export default class PostController extends LoggedPageController{

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }
}

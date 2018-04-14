import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";

@Injectable()
export default class PostController extends LeftSideBarController{

  constructor(private userChild: UserDataUseCase,
              private authChild: AuthUseCase,
              private routerChild: Router) {
    super(userChild, authChild, routerChild);
  }
}

import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthController from "@app/ui/auth/AuthController";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";

@Injectable()
export default class LeftSideBarController extends AuthController{

  constructor(private userDataUseCase: UserDataUseCase,
              private authParent: AuthUseCase,
              private routerParent: Router) {
    super(authParent, routerParent);
  }

  getUserData(responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    this.userDataUseCase.getUser(requestData, responseHandler);
  }

  goToNewPost() {
    this.routerParent.navigate(['/post']);
  }

  goToProfile() {
    this.routerParent.navigate(['/user']);
  }

  goToFavorites() {
    this.routerParent.navigate(['/favorites']);
  }

  goToSettings() {
    this.routerParent.navigate(['/settings']);
  }
}

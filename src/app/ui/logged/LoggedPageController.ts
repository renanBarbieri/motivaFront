import {Injectable} from "@angular/core";
import LeftSideBarController from "app/components/leftSideBar/LeftSideBarController";
import ToolbarController from "app/components/toolbar/ToolbarController";
import AuthUseCase from "app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";

@Injectable()
export default class LoggedPageController extends LeftSideBarController implements ToolbarController {

  constructor(private userDataUseCaseChild: UserDataUseCase,
              private authUseCaseChild: AuthUseCase,
              private routerChild: Router) {
    super(userDataUseCaseChild, authUseCaseChild, routerChild);
  }

  goToProfile(): void {
    this.routerChild.navigate(['/user']);
  }

  goToFavorites(): void {
    this.routerChild.navigate(['/views']);
  }

  goToSettings(): void {
    this.routerChild.navigate(['/settings']);
  }

  goToNewPost() {
    this.routerChild.navigate(['/post']);
  }

  goToSearch() {
    this.routerChild.navigate(['/search']);
  }

  goToHome(): void {
    this.routerChild.navigate(['/']);
  }

}

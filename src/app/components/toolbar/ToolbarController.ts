import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export default class ToolbarController{

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToNewPost() {
    this.router.navigate(['/post']);
  }
}

import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export default abstract class ToolbarController{

  abstract goToHome();

  abstract goToNewPost();

  abstract goToSearch();
}

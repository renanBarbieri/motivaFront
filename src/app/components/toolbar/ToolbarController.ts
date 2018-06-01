import {Injectable} from "@angular/core";

@Injectable()
export default abstract class ToolbarController {

  abstract goToHome();

  abstract goToNewPost();

  abstract goToSearch();
}

import {Injectable} from "@angular/core";
import {ScreenState} from "@app/ui/ScreenState";

@Injectable()
export default class LoginViewModel {
  state: ScreenState = ScreenState.LOADING;
}

import {Injectable} from "@angular/core";
import {ScreenState} from "@app/ui/ScreenState";

@Injectable()
export default class AuthViewModel {
  state: ScreenState = ScreenState.LOADING;
  logged: boolean = false;
}

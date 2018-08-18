import {Injectable} from "@angular/core";
import {ScreenState} from "@app/ui/ScreenState";
import {MatDialog} from "@angular/material";

@Injectable()
export default class LoginViewModel {
  state: ScreenState = ScreenState.LOADING;
}

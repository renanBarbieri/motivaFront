import {UIContract} from "app/useCases/UIContract";

export interface AuthUiView extends UIContract {
  updateLoggedStatus(logged: boolean);

}

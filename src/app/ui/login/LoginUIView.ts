import {UIContract} from "app/useCases/UIContract";

export interface LoginUiView extends UIContract {
  onLoggingSuccess();
  onFirstLogin();
}

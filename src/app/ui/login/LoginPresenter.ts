import {HomeUiView} from "app/ui/home/HomeUIView";
import {Injectable} from "@angular/core";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UIContract} from "app/useCases/UIContract";

@Injectable()
export default class LoginPresenter implements UserDataOutputBoundary{
  private view: UIContract;

  onViewInit(view: UIContract) {
    this.view = view;
  }


  onUserDataSuccess(responseData: UserDataOutputModel) {
    console.log("logado");
    //TODO: REDIRECIONAR/RECARREGAR A PÁGINA
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

}

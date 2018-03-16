import {Injectable} from "@angular/core";
import {SearchOutputBoundary, SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "@app/useCases/userData/UserDataOutputBoundary";
import {SearchUiView} from "@app/useCases/search/SearchUIView";

@Injectable()
export default class SearchPresenter implements SearchOutputBoundary, UserDataOutputBoundary{

  private view: SearchUiView;

  initPresenter(viewInstance: SearchUiView){
    this.view = viewInstance;
  }

  onSearchSuccess(result: SearchOutputModel) {
    console.log(result);
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName, responseData.profileImage, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

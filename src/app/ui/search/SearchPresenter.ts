import {Injectable} from "@angular/core";
import {SearchOutputBoundary, SearchOutputModel} from "app/useCases/search/SearchOutputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {SearchUiView} from "app/ui/search/SearchUIView";
import AuthPresenter from "app/ui/auth/AuthPresenter";

@Injectable()
export default class SearchPresenter extends AuthPresenter implements SearchOutputBoundary, UserDataOutputBoundary {

  private searchUiView: SearchUiView;

  onViewInit(viewInstance: SearchUiView) {
    this.searchUiView = viewInstance;
    super.onViewInit(viewInstance);
  }

  onSearchSuccess(result: SearchOutputModel) {
    this.searchUiView.updateResultList([result.users, result.tags, result.posts]);
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.searchUiView.updateUserData(responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    console.log(errorData);
  }
}

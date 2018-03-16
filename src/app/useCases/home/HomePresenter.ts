import {HomeUiView} from "app/useCases/home/HomeUIView";
import {Injectable} from "@angular/core";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";

@Injectable()
export default class HomePresenter implements HomeOutputBoundary{
  private view: HomeUiView;

  onViewInit(view: HomeUiView) {
    this.view = view;
  }


  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName, responseData.profileImage, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    console.log("Presenter");
    this.view.updateTopicList(responseData.tagPostsMap)

  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

}

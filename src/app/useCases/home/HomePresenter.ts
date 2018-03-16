import {HomeUiView} from "app/useCases/home/HomeUIView";
import {Injectable} from "@angular/core";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import {Router} from "@angular/router";

@Injectable()
export default class HomePresenter implements HomeOutputBoundary{
  private view: HomeUiView;

  constructor(private router: Router) {
  }

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

  onSearchSuccess(result: SearchOutputModel) {
    console.log("im here");
    this.router.navigate(['/search', result.query]);
  }
}

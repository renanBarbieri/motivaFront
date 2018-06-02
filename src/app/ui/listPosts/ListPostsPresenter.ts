import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {ListPostsUiView} from "@app/ui/listPosts/ListPostsUIView";
import {ListPostsOutputBoundary, ListPostsOutputModel} from "@app/useCases/listPosts/ListPostsOutputBoundary";

@Injectable()
export default class ListPostsPresenter extends AuthPresenter implements UserDataOutputBoundary, ListPostsOutputBoundary {
  private listPostsUiView: ListPostsUiView;

  onViewInit(view: ListPostsUiView) {
    super.onViewInit(view);
    this.listPostsUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.listPostsUiView.updateUserData(responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.listPostsUiView.showErrorAlert(errorData.message);
  }


  onListPostsSuccess(responseData: ListPostsOutputModel) {
    this.listPostsUiView.updateTopicList(responseData.posts);
  }


  onListPostsError(errorData: any) {
    this.listPostsUiView.showErrorAlert(errorData.message);
  }
}

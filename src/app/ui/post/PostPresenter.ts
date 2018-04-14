import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {Router} from "@angular/router";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {PostUiView} from "@app/ui/post/PostUIView";

@Injectable()
export default class PostPresenter extends AuthPresenter implements UserDataOutputBoundary,
    AuthOutputBoundary{
  private postUiView: PostUiView;

  constructor(private router: Router){
    super();
  }

  onViewInit(view: PostUiView) {
    super.onViewInit(view);
    this.postUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.postUiView.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.postUiView.showErrorAlert(errorData.message);
  }

}

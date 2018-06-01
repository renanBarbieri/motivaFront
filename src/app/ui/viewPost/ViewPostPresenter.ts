import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {ViewPostUiView} from "@app/ui/viewPost/ViewPostUIView";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";

@Injectable()
export default class ViewPostPresenter extends AuthPresenter implements PostOutputBoundary, UserDataOutputBoundary,
    AuthOutputBoundary{
  private viewPostUiView: ViewPostUiView;

  onViewInit(view: ViewPostUiView) {
    super.onViewInit(view);
    this.viewPostUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.viewPostUiView.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.viewPostUiView.showErrorAlert(errorData.message);
  }

  onGetPostDataSuccess(postOutput: PostOutputModel) {

    let estimatedRead: string;
    const decimalTime = (postOutput.estimateTime)%1;

    if(decimalTime < 0.5 && (postOutput.estimateTime) >= 1){
      estimatedRead = (postOutput.estimateTime).toFixed(0);
    }
    else {
      if(postOutput.estimateTime < 1){
        estimatedRead = "menos de ".concat((postOutput.estimateTime + 1).toFixed(0));
      }
      else {
        estimatedRead = "menos de ".concat(postOutput.estimateTime.toFixed(0));
      }
    }

    this.viewPostUiView.updatePostData(
      postOutput.title,
      estimatedRead,
      postOutput.tags,
      postOutput.text,
      postOutput.bannerImage
    );
  }

  onGetPostDataError(errorData: any) {
    this.viewPostUiView.showErrorAlert(errorData.message);
  }
}

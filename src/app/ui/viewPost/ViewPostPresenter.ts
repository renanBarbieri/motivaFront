import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {ViewPostUiView} from "@app/ui/viewPost/ViewPostUIView";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";
import {PostCommentOutputBoundary, PostCommentOutputModel} from "@app/useCases/post/PostCommentOutputBoundary";
import CommentItem from "@app/ui/models/CommentItem";

@Injectable()
export default class ViewPostPresenter extends AuthPresenter implements PostOutputBoundary, PostCommentOutputBoundary,
  UserDataOutputBoundary, AuthOutputBoundary {
  private viewPostUiView: ViewPostUiView;

  onViewInit(view: ViewPostUiView) {
    super.onViewInit(view);
    this.viewPostUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.viewPostUiView.updateUserData(responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.viewPostUiView.showErrorAlert(errorData.message);
  }

  onGetPostDataSuccess(postOutput: PostOutputModel) {

    let estimatedRead: string;
    const decimalTime = (postOutput.estimateTime) % 1;

    if (decimalTime < 0.5 && (postOutput.estimateTime) >= 1) {
      estimatedRead = (postOutput.estimateTime).toFixed(0);
    }
    else {
      if (postOutput.estimateTime < 1) {
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

  onGetPostCommentSuccess(postOutput: PostCommentOutputModel) {
    let listComments: Array<CommentItem> = postOutput.comments.map(it => {

      console.log(it.date);

      let item = new CommentItem();
      item.entityReference = it.username;
      item.authorName = it.user;
      item.date = (new Date(it.date)).toLocaleString();
      item.text = it.text;
      item.authorAvatar = it.avatar;
      return item;
    });

    this.viewPostUiView.updateCommentList(listComments);
  }

  onAddCommentSuccess() {
    console.log("onAddCommentSuccess");
    this.viewPostUiView.updateCommentListAfterAddComment()
  }


  onGetPostCommentError(err: any) {
    this.viewPostUiView.showErrorAlert(err.message);
  }

  onGetPostDataError(errorData: any) {
    this.viewPostUiView.showErrorAlert(errorData.message);
  }

  onAddCommentError(err: any) {
    this.viewPostUiView.showErrorAlert(err.message);
  }
}

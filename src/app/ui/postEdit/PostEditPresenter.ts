import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {Router} from "@angular/router";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {PostUiView} from "@app/ui/post/PostUIView";
import {
  BannerOutputModel,
  ImageUploaderOutputModel,
  PublishPostOutputBoundary,
  PublishPostOutputModel,
  TagListOutputModel
} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";
import {PostEditUIView} from "@app/ui/postEdit/PostEditUIView";

@Injectable()
export default class PostEditPresenter extends AuthPresenter implements UserDataOutputBoundary,
  AuthOutputBoundary, PublishPostOutputBoundary, PostOutputBoundary {
  private postEditUiView: PostEditUIView;

  constructor(private router: Router) {
    super();
  }

  onViewInit(view: PostEditUIView) {
    super.onViewInit(view);
    this.postEditUiView = view;
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.postEditUiView.updateUserData(responseData.username, responseData.levelCompleted,
      responseData.levelName, responseData.profileImage,
      responseData.rewards, responseData.tags);
  }

  onImageUploaderBuilt(imageUploaderOutputModel: ImageUploaderOutputModel) {
    this.postEditUiView.uploaderReady(imageUploaderOutputModel.imageUploader);
  }

  onTagsListed(tagsOutputModel: TagListOutputModel) {
    this.postEditUiView.onTagsListed(tagsOutputModel.tags);
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

    this.postEditUiView.updatePostData(
      postOutput.title,
      estimatedRead,
      postOutput.tags,
      postOutput.text,
      postOutput.bannerImage
    );
  }

  onBannerUploaded(bannerOutputModel: BannerOutputModel) {
    this.postEditUiView.onImageUploadSuccess(bannerOutputModel.url);
  }

  onPublishSuccess(publishPostOutputModel: PublishPostOutputModel) {
    this.postEditUiView.onUpdatePostSuccess()
  }

  onUserDataError(errorData: any) {
    this.postEditUiView.showErrorAlert(errorData.message);
  }

  onBannerUploadError(errorData: any) {
    this.postEditUiView.showErrorAlert(errorData.message);
  }

  onPublishError(errorData: any) {
    this.postEditUiView.showErrorAlert(errorData.message);
  }

  onGetPostDataError(err: any) {
  }
}

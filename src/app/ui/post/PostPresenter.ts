import {Injectable} from "@angular/core";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {Router} from "@angular/router";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {PostUiView} from "@app/ui/post/PostUIView";
import {
  BannerOutputModel, ImageUploaderOutputModel, PublishPostOutputBoundary,
  PublishPostOutputModel, TagListOutputModel
} from "@app/useCases/publishPost/PublishPostOutputBoundary";

@Injectable()
export default class PostPresenter extends AuthPresenter implements UserDataOutputBoundary,
    AuthOutputBoundary, PublishPostOutputBoundary{
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

  onImageUploaderBuilt(imageUploaderOutputModel: ImageUploaderOutputModel) {
    this.postUiView.uploaderReady(imageUploaderOutputModel.imageUploader);
  }


  onTagsListed(tagsOutputModel: TagListOutputModel) {
    this.postUiView.onTagsListed(tagsOutputModel.tags);
  }

  onBannerUploaded(bannerOutputModel: BannerOutputModel) {
    this.postUiView.onImageUploadSuccess(bannerOutputModel.url);
  }

  onPublishSuccess(publishPostOutputModel: PublishPostOutputModel) {
    //TODO: redirecionar para a visualização do post
  }

  onUserDataError(errorData: any) {
    this.postUiView.showErrorAlert(errorData.message);
  }

  onBannerUploadError(errorData: any) {
    this.postUiView.showErrorAlert(errorData.message);
  }

  onPublishError(errorData: any) {
    this.postUiView.showErrorAlert(errorData.message);
  }
}

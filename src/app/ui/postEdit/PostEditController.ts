import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import PublishPostUseCase from "@app/useCases/publishPost/PublishPostUseCase";
import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import ManageTagUseCase from "@app/useCases/tag/ManageTagUseCase";
import {PublishPostInputModel} from "@app/useCases/publishPost/PublishPostInputBoundary";
import {PostOutputBoundary} from "@app/useCases/post/PostOutputBoundary";
import {PostInputModel} from "@app/useCases/post/PostInputBoundary";
import {PostCommentOutputBoundary} from "@app/useCases/post/PostCommentOutputBoundary";
import PostUseCase from "@app/useCases/post/PostUseCase";

@Injectable()
export default class PostEditController extends LoggedPageController {

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router,
              private publishPostUseCase: PublishPostUseCase,
              private manageTagUseCase: ManageTagUseCase,
              private postUseCase: PostUseCase) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }

  getFileUploader(outputBoundary: PublishPostOutputBoundary) {
    this.publishPostUseCase.buildBannerUploader(outputBoundary)
  }

  getRegisteredTags(outputBoundary: PublishPostOutputBoundary) {
    this.manageTagUseCase.getRegisteredTags(outputBoundary);
  }

  getPostData(postId: number, postOutputBoudary: PostOutputBoundary) {
    const postInputModel = new PostInputModel();
    postInputModel.postId = postId;
    this.postUseCase.retrievePostData(postInputModel, postOutputBoudary);
  }

  publishImage(outputBoundary: PublishPostOutputBoundary) {
    this.publishPostUseCase.uploadBanner(outputBoundary);
  }

  publishPost(title: string, tags: Array<string>, text: string, bannerURL: string, outputBoundary: PublishPostOutputBoundary) {
    let inputModel = new PublishPostInputModel();
    inputModel.title = title;
    inputModel.tags = tags;
    inputModel.text = text;
    inputModel.bannerURL = bannerURL;
    this.publishPostUseCase.updatePost(inputModel, outputBoundary);
  }
}

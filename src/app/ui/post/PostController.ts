import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import PublishPostUseCase from "@app/useCases/publishPost/PublishPostUseCase";
import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import ManageTagUseCase from "@app/useCases/tag/ManageTagUseCase";
import {PublishPostInputModel} from "@app/useCases/publishPost/PublishPostInputBoundary";

@Injectable()
export default class PostController extends LoggedPageController{

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router,
              private publishPostUseCase: PublishPostUseCase,
              private manageTagUseCase: ManageTagUseCase) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }

  getFileUploader(outputBoundary: PublishPostOutputBoundary) {
    this.publishPostUseCase.buildBannerUploader(outputBoundary)
  }

  getRegisteredTags(outputBoundary: PublishPostOutputBoundary){
    this.manageTagUseCase.getRegisteredTags(outputBoundary);
  }

  publishImage(outputBoundary: PublishPostOutputBoundary){
    this.publishPostUseCase.uploadBanner(outputBoundary);
  }

  publishPost(title: string, tags: Array<string>, text: string, bannerURL: string, outputBoundary: PublishPostOutputBoundary){
    let inputModel = new PublishPostInputModel();
    inputModel.title = title;
    inputModel.tags = tags;
    inputModel.text = text;
    inputModel.bannerURL = bannerURL;
    this.publishPostUseCase.publishPost(inputModel, outputBoundary);
  }
}

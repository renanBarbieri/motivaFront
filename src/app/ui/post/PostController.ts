import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import PublishPostUseCase from "@app/useCases/publishPost/PublishPostUseCase";
import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";

@Injectable()
export default class PostController extends LoggedPageController{

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router,
              private publishPostUseCase: PublishPostUseCase) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }

  getFileUploader(outputBoundary: PublishPostOutputBoundary) {
    this.publishPostUseCase.getBannerUploader(outputBoundary)
  }

  getRegisteredTags(outputBoundary: PublishPostOutputBoundary){

  }

  publishImage(outputBoundary: PublishPostOutputBoundary){
    this.publishPostUseCase.uploadBanner(outputBoundary);
  }

  publishPost(title: string, tags: Array<string>, text: string, bannerURL: string){

  }
}

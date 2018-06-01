import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import PostUseCase from "@app/useCases/post/PostUseCase";
import {PostOutputBoundary} from "@app/useCases/post/PostOutputBoundary";
import {PostInputModel} from "@app/useCases/post/PostInputBoundary";

@Injectable()
export default class ViewPostController extends LoggedPageController {

  constructor(private userCreatePost: UserDataUseCase,
              private authCreatePost: AuthUseCase,
              private routerCreatePost: Router,
              private postUseCase: PostUseCase) {
    super(userCreatePost, authCreatePost, routerCreatePost);
  }

  getPostData(username: string, postId: number, outputBoudary: PostOutputBoundary) {
    const postInputModel = new PostInputModel();
    postInputModel.postId = postId;
    postInputModel.username = username;
    this.postUseCase.retrievePostData(postInputModel, outputBoudary);
  }
}

import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedPageController from "@app/ui/logged/LoggedPageController";
import PostUseCase from "@app/useCases/post/PostUseCase";
import {PostOutputBoundary} from "@app/useCases/post/PostOutputBoundary";
import {PostInputModel} from "@app/useCases/post/PostInputBoundary";
import {PostCommentOutputBoundary} from "@app/useCases/post/PostCommentOutputBoundary";

@Injectable()
export default class ViewPostController extends LoggedPageController {

  constructor(private userViewPost: UserDataUseCase,
              private authViewPost: AuthUseCase,
              private routerViewPost: Router,
              private postUseCase: PostUseCase) {
    super(userViewPost, authViewPost, routerViewPost);
  }

  getPostData(username: string, postId: number, postOutputBoudary: PostOutputBoundary, commentOutputBoundary: PostCommentOutputBoundary) {
    const postInputModel = new PostInputModel();
    postInputModel.postId = postId;
    postInputModel.username = username;
    this.postUseCase.retrievePostData(postInputModel, postOutputBoudary);
    this.postUseCase.retrievePostComments(postInputModel, commentOutputBoundary);
  }


  getResultsOfSearch(searchText: string) {
    this.routerViewPost.navigate(['/search', {q: searchText}]);
  }
}

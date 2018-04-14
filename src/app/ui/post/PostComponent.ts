import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import PostViewModel from "@app/ui/post/PostViewModel";
import PostController from "@app/ui/post/PostController";
import {PostUiView} from "@app/ui/post/PostUIView";
import PostPresenter from "@app/ui/post/PostPresenter";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";

@Component({
  selector: 'app-post',
  templateUrl: './PostView.html',
  styleUrls: ['./PostStyle.css'],
  providers: [
    { provide: PostController, useClass: PostController },
    { provide: PostPresenter, useClass: PostPresenter },
    { provide: PostViewModel, useClass: PostViewModel },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: AuthUseCase, useClass: AuthUseCase }
  ]
})
export class PostComponent implements OnInit, PostUiView{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor(
    private postPresenter: PostPresenter,
    private postController: PostController,
    private postViewModel: PostViewModel)
  {}

  ngOnInit(){
    this.postPresenter.onViewInit(this);
    this.postController.verifyAuthorization(this.postPresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if(logged){
      this.authStateLogged.emit(true);
      this.postController.getUserData(this.postPresenter);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.postViewModel.username = username;
    this.postViewModel.levelCompleted = levelCompleted;
    this.postViewModel.levelName = levelName;
    this.postViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.postViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.postViewModel.rewards.push(it);
    });
  }

  openProfile() {
    this.postController.goToProfile();
  }

  openFavorites() {
    this.postController.goToFavorites();
  }

  openSettings() {
    this.postController.goToSettings();
  }

  logout() {
    this.postController.makeLogout(this.postPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}

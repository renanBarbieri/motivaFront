import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import PostItem from "@app/ui/models/PostItem";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import ViewPostsController from "./ViewPostsController";
import ViewPostsPresenter from "./ViewPostsPresenter";
import ViewPostsViewModel from "./ViewPostsViewModel";
import {ViewPostsUiView} from "./ViewPostsUIView";

@Component({
  selector: 'app-view-posts',
  templateUrl: './ViewPostsView.html',
  styleUrls: ['./ViewPostsStyle.css'],
  providers: [
    {provide: ViewPostsController, useClass: ViewPostsController},
    {provide: ViewPostsPresenter, useClass: ViewPostsPresenter},
    {provide: ViewPostsViewModel, useClass: ViewPostsViewModel},
    {provide: PostsOfTopicsInterestUseCase, useClass: PostsOfTopicsInterestUseCase},
    {provide: AuthUseCase, useClass: AuthUseCase},
    {provide: UserDataUseCase, useClass: UserDataUseCase},
    {provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class ViewPostsComponent extends LoggedComponent implements OnInit, ViewPostsUiView {

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor(private viewPostsPresenter: ViewPostsPresenter,
              private viewPostsController: ViewPostsController,
              public viewPostsViewModel: ViewPostsViewModel) {
    super(viewPostsController);
  }

  ngOnInit() {
    this.viewPostsPresenter.onViewInit(this);
    this.viewPostsController.verifyAuthorization(this.viewPostsPresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if (logged) {
      this.authStateLogged.emit(true);
      this.viewPostsController.getUserData(this.viewPostsPresenter);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.viewPostsViewModel.username = username;
    this.viewPostsViewModel.levelCompleted = levelCompleted;
    this.viewPostsViewModel.levelName = levelName;
    this.viewPostsViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
    this.viewPostsController.getPosts(this.viewPostsPresenter, tags);
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.viewPostsViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.viewPostsViewModel.rewards.push(it);
    });
  }

  updateTopicList(newPostList: PostItem[]) {
    this.viewPostsViewModel.postList = newPostList;
  }

  onSearchInput($textToSearch: string) {
    this.viewPostsController.getResultsOfSearch($textToSearch)
  }

  onCardClick($postValues) {
    this.viewPostsController.openPost($postValues.post, $postValues.username);
  }

  logout() {
    super.logout(this.viewPostsPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}

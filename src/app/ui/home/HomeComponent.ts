import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import HomeViewModel from "app/ui/home/HomeViewModel";
import {HomeUiView} from "app/ui/home/HomeUIView";
import HomeController from "app/ui/home/HomeController";
import HomePresenter from "app/ui/home/HomePresenter";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import PostItem from "@app/ui/models/PostItem";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";

@Component({
  selector: 'app-home',
  templateUrl: './HomeView.html',
  styleUrls: ['./HomeStyle.css'],
  providers: [
    {provide: HomeController, useClass: HomeController},
    {provide: HomePresenter, useClass: HomePresenter},
    {provide: HomeViewModel, useClass: HomeViewModel},
    {provide: PostsOfTopicsInterestUseCase, useClass: PostsOfTopicsInterestUseCase},
    {provide: AuthUseCase, useClass: AuthUseCase},
    {provide: UserDataUseCase, useClass: UserDataUseCase},
    {provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class HomeComponent extends LoggedComponent implements OnInit, HomeUiView {

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor(private homePresenter: HomePresenter,
              private homeController: HomeController,
              public homeViewModel: HomeViewModel) {
    super(homeController);
  }

  ngOnInit() {
    this.homePresenter.onViewInit(this);
    this.homeController.verifyAuthorization(this.homePresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if (logged) {
      this.authStateLogged.emit(true);
      this.homeController.getUserData(this.homePresenter);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.homeViewModel.username = username;
    this.homeViewModel.levelCompleted = levelCompleted;
    this.homeViewModel.levelName = levelName;
    this.homeViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
    this.homeController.getPostsOfTopicsOfInterest(this.homePresenter, tags);
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.homeViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.homeViewModel.rewards.push(it);
    });
  }

  updateTopicList(topicList: Map<string, PostItem[]>) {
    this.clearHomeViewLists();
    topicList.forEach((value: PostItem[], key: string) => {
      this.homeViewModel.topicsKeys.push(key);
      this.homeViewModel.topicsList.set(key, value);
    });
  }

  onSearchInput($textToSearch: string) {
    this.homeController.getResultsOfSearch($textToSearch)
  }

  onCardClick($postValues) {
    console.log($postValues.post);
    console.log($postValues.username);
    this.homeController.openPost($postValues.post, $postValues.username);
  }

  logout() {
    super.logout(this.homePresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }

  private clearHomeViewLists() {
    this.homeViewModel.topicsList.clear();
    this.homeViewModel.topicsKeys.length = 0;
  }
}

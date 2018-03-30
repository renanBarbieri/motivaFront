import {Component, Inject, OnInit} from '@angular/core';
import HomeViewModel from "app/ui/home/HomeViewModel";
import {HomeUiView} from "app/ui/home/HomeUIView";
import HomeController from "app/ui/home/HomeController";
import HomePresenter from "app/ui/home/HomePresenter";
import PostsOfTopicsInterestUseCase from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import PostItem from "@app/ui/models/PostItem";
import RewardItem from "@app/ui/models/RewardItem";

@Component({
  selector: 'app-home',
  templateUrl: './HomeView.html',
  styleUrls: ['./HomeStyle.css'],
  providers: [
    { provide: HomeController, useClass: HomeController },
    { provide: HomePresenter, useClass: HomePresenter },
    { provide: HomeViewModel, useClass: HomeViewModel },
    { provide: PostsOfTopicsInterestUseCase, useClass: PostsOfTopicsInterestUseCase },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class HomeComponent implements OnInit, HomeUiView{

  constructor(
      @Inject(HomePresenter) private homePresenter,
      @Inject(HomeController) private homeController,
      @Inject(HomeViewModel) public homeViewModel)
  {}

  ngOnInit(){
    this.homePresenter.onViewInit(this);
    this.homeController.getUserData(this.homePresenter)
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
      console.log(it);
      this.homeViewModel.rewards.push(it);
    });
  }

  updateTopicList(topicList: Map<string, PostItem[]>) {
    this.clearHomeViewLists();
    topicList.forEach((value: PostItem[], key: string) => {
      this.homeViewModel.topicsKeys.push(key);
      this.homeViewModel.topicsList.set(key, value)
    });
  }

  private clearHomeViewLists(){
    this.homeViewModel.topicsList.clear();
    this.homeViewModel.topicsKeys.length = 0;
  }

  onSearchInput($textToSearch: string){
    this.homeController.getResultsOfSearch($textToSearch)
  }

  openProfile() {
    this.homeController.goToProfile();
  }

  openFavorites() {
    this.homeController.goToFavorites();
  }

  openSettings() {
    this.homeController.goToSettings();
  }

  showErrorAlert(message: String) {

  }
}

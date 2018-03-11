import {Component, Inject, OnInit} from '@angular/core';
import HomeViewModel from "app/useCases/home/HomeViewModel";
import {HomeUiView} from "app/useCases/home/HomeUIView";
import HomeController from "app/useCases/home/HomeController";
import CardViewModel from "app/useCases/card/CardViewModel";
import HomePresenter from "@app/useCases/home/HomePresenter";
import HomeUseCase from "@app/useCases/home/HomeUseCase";
import PostsOfTopicsInterestUseCase from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import UserRepositoryImpl from "@app/data/repository/UserRepository";
import SearchUseCase from "@app/useCases/search/SearchUseCase";

@Component({
  selector: 'app-home',
  templateUrl: './HomeView.html',
  styleUrls: ['./HomeStyle.css'],
  providers: [
    { provide: HomeController, useClass: HomeController },
    { provide: HomePresenter, useClass: HomePresenter },
    { provide: HomeViewModel, useClass: HomeViewModel },
    { provide: HomeUseCase, useClass: HomeUseCase },
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
    this.homeController.onViewInit(this.homePresenter)
  }

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>) {
    this.homeViewModel.username = username;
    this.homeViewModel.levelCompleted = levelCompleted;
    this.homeViewModel.levelName = levelName;
    this.homeViewModel.profileImage = profileImageUrl;
    this.homeController.getPostsOfTopicsOfInterest(this.homePresenter, tags)
  }

  updateTopicList(topicList: Map<string, CardViewModel[]>) {
    this.clearHomeViewLists();
    topicList.forEach((value: CardViewModel[], key: string) => {
      this.homeViewModel.topicsKeys.push(key);
      this.homeViewModel.topicsList.set(key, value)
    });
  }

  private clearHomeViewLists(){
    this.homeViewModel.topicsList.clear();
    this.homeViewModel.topicsKeys.length = 0;
  }

  onSearchInput($textToSearch: string){
    console.log(`cheguei: ${$textToSearch}`);
  }

  showErrorAlert(message: String) {

  }
}

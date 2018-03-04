import {Component, Inject, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {HomeUiView} from "@app/presentation/view/HomeUIView";
import HomeController from "@app/presentation/controller/HomeController";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css'],
  providers: [HomeController, HomePresenterImpl, HomeViewModel, HomeUseCaseImpl]
})
export class HomeComponent implements OnInit, HomeUiView{

  constructor(
      @Inject(HomePresenterImpl) private homePresenter,
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
    this.homeController.getPostsOfTopicsOfInterest(this.homePresenter, tags.keys())
  }

  updateTopicList(topicList: Map<string, CardViewModel[]>) {
    this.homeViewModel.topicsList.clear();
    console.log("HomeComponent");
    console.log(topicList);
    topicList.forEach((value: CardViewModel[], key: string) => {
      this.homeViewModel.topicsKeys.push(key);
      this.homeViewModel.topicsList.set(key, value)
    });
  }

  showErrorAlert(message: String) {

  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import PostItem from "@app/ui/models/PostItem";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import ListPostsController from "./ListPostsController";
import ListPostsPresenter from "./ListPostsPresenter";
import ListPostsViewModel from "./ListPostsViewModel";
import {ListPostsUiView} from "./ListPostsUIView";
import ListPostsUseCase from "@app/useCases/listPosts/ListPostsUseCase";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-posts',
  templateUrl: './ListPostsView.html',
  styleUrls: ['./ListPostsStyle.css'],
  providers: [
    {provide: ListPostsController, useClass: ListPostsController},
    {provide: ListPostsPresenter, useClass: ListPostsPresenter},
    {provide: ListPostsViewModel, useClass: ListPostsViewModel},
    {provide: ListPostsUseCase, useClass: ListPostsUseCase},
    {provide: AuthUseCase, useClass: AuthUseCase},
    {provide: UserDataUseCase, useClass: UserDataUseCase},
    {provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class ListPostsComponent extends LoggedComponent implements OnInit, ListPostsUiView {

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor(private listPostsPresenter: ListPostsPresenter,
              private listPostsController: ListPostsController,
              public listPostsViewModel: ListPostsViewModel,
              private route: ActivatedRoute) {
    super(listPostsController);
    this.route.params.subscribe( params => {
      if(params.tagId){
        this.listPostsViewModel.title = `Posts com a tag ${params.tagId}`;
        this.listPostsController.getTagPosts(this.listPostsPresenter, params.tagId);
      }
      else if(params.username) {
        this.listPostsViewModel.title = `Posts de ${params.username}`;
        this.listPostsController.getUserPosts(this.listPostsPresenter, params.username);
      }
    });
  }

  ngOnInit() {
    this.listPostsPresenter.onViewInit(this);
    this.listPostsController.verifyAuthorization(this.listPostsPresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if (logged) {
      this.authStateLogged.emit(true);
      this.listPostsController.getUserData(this.listPostsPresenter);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.listPostsViewModel.username = username;
    this.listPostsViewModel.levelCompleted = levelCompleted;
    this.listPostsViewModel.levelName = levelName;
    this.listPostsViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);

  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.listPostsViewModel.rewards.length = 0;
    newRewards.forEach(it => this.listPostsViewModel.rewards.push(it));
  }

  updateTopicList(newPostList: Array<PostItem>) {
    this.updateViewList(newPostList, this.listPostsViewModel.postList, this.listPostsViewModel.postIndexes)
  }

  updateViewList(contentArray: Array<any>, toPopulateArray: Array<any>, indexes: Array<number>) {
    let count = 0;
    toPopulateArray.length = 0;
    indexes.length = 0;

    contentArray.forEach((it) => {
      toPopulateArray.push(it);
      indexes.push(count);
      count++;
    });
  }

  onSearchInput($textToSearch: string) {
    this.listPostsController.getResultsOfSearch($textToSearch)
  }

  onCardClick(postId, username) {
    console.log(this.listPostsViewModel.postList);
    this.listPostsController.openPost(postId, username);
  }

  logout() {
    super.logout(this.listPostsPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}

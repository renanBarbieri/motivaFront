import PostItem from '@app/ui/models/PostItem';
import TopicItem from '@app/ui/models/TopicItem';
import UserItem from '@app/ui/models/UserItem';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchUiView} from "app/ui/search/SearchUIView";
import SearchViewModel from "@app/ui/search/SearchViewModel";
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import SearchController from "@app/ui/search/SearchController";
import SearchPresenter from "@app/ui/search/SearchPresenter";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";


@Component({
  selector: 'app-search',
  templateUrl: './SearchView.html',
  styleUrls: ['./SearchStyle.css'],
  providers: [
    { provide: SearchViewModel, useClass: SearchViewModel },
    { provide: SearchController, useClass: SearchController },
    { provide: SearchPresenter, useClass: SearchPresenter },
    { provide: AuthUseCase, useClass: AuthUseCase },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class SearchComponent implements SearchUiView, OnInit{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  public postIndexes: Array<number> = [];
  public userIndexes: Array<number> = [];
  public topicIndexes: Array<number> = [];

  public searchQuery;

  constructor(public searchViewModel: SearchViewModel,
              private searchController: SearchController,
              private searchPresenter: SearchPresenter,
              private location: Location,
              private route: ActivatedRoute){}

  ngOnInit(){
    this.searchQuery = this.route.snapshot.paramMap.get('q');
    this.searchPresenter.onViewInit(this);
    this.searchController.verifyAuthorization(this.searchPresenter);
  }


  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if(logged){
      this.authStateLogged.emit(true);
      this.searchController.getUserData(this.searchPresenter);
      this.searchController.getResultsOfSearch(this.searchQuery, this.searchPresenter);
    }
    else {
      this.searchController.redirectToLogin();
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.searchViewModel.username = username;
    this.searchViewModel.levelCompleted = levelCompleted;
    this.searchViewModel.levelName = levelName;
    this.searchViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  updateResultList(result:  [Array<UserItem>, Array<TopicItem>, Array<PostItem>]){
    this.searchViewModel.userResultList = result[0];
    this.searchViewModel.topicResultList = result[1];
    this.searchViewModel.postResultList = result[2];

    this.updateUserIndexes();
    this.updateTopicIndexes();
    this.updatePostIndexes();

    this.location.replaceState(`/search;q=${this.searchQuery}`)
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.searchViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      console.log(it);
      this.searchViewModel.rewards.push(it);
    });
  }

  updatePostIndexes(){
    this.postIndexes = [];
    for(let idx = 0; idx < this.searchViewModel.postResultList.length; idx++){
      this.postIndexes.push(idx)
    }
  }

  updateUserIndexes(){
    this.userIndexes = [];
    for(let idx = 0; idx < this.searchViewModel.userResultList.length; idx++){
      this.userIndexes.push(idx)
    }
  }

  updateTopicIndexes(){
    this.topicIndexes= [];
    for(let idx = 0; idx < this.searchViewModel.topicResultList.length; idx++){
      this.topicIndexes.push(idx)
    }
  }

  clearAllResults(){
    this.searchViewModel.userResultList = [];
    this.searchViewModel.topicResultList = [];
    this.searchViewModel.postResultList = [];

    this.updateUserIndexes();
    this.updateTopicIndexes();
    this.updatePostIndexes();
  }

  onSearchInput(textToSearch: string){
    this.searchQuery = textToSearch;
    this.searchController.getResultsOfSearch(textToSearch, this.searchPresenter);
    this.clearAllResults();
  }

  onProfileClick(){

  }

  onTopicClick(topicId: number){
    console.log(`cliquei no tópico ${topicId}`)
  }

  onPostClick() {

  }

  openProfile() {
    this.searchController.goToProfile();
  }

  openFavorites() {
    this.searchController.goToFavorites();
  }

  openSettings() {
    this.searchController.goToSettings();
  }

  logout() {
    this.searchController.makeLogout(this.searchPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }


}

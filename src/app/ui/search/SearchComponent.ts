import PostItem from '@app/ui/models/PostItem';
import TopicItem from '@app/ui/models/TopicItem';
import UserItem from '@app/ui/models/UserItem';
import {Component, Inject, OnInit} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchUiView} from "app/useCases/search/SearchUIView";
import SearchViewModel from "@app/ui/search/SearchViewModel";
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";
import SearchController from "@app/useCases/search/SearchController";
import SearchPresenter from "@app/useCases/search/SearchPresenter";


@Component({
  selector: 'app-home',
  templateUrl: './SearchView.html',
  styleUrls: ['./SearchStyle.css'],
  providers: [
    { provide: SearchViewModel, useClass: SearchViewModel },
    { provide: SearchController, useClass: SearchController },
    { provide: SearchPresenter, useClass: SearchPresenter },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class SearchComponent implements SearchUiView, OnInit{

  public postIndexes: Array<number> = [];
  public userIndexes: Array<number> = [];

  constructor(public searchViewModel: SearchViewModel,
              private searchController: SearchController,
              private searchPresenter: SearchPresenter,
              private route: ActivatedRoute){}

  ngOnInit(){
    console.log("estoy aqui");

    const searchQuery = this.route.snapshot.paramMap.get('q');
    this.searchPresenter.initPresenter(this);
    this.searchController.getUserData(this.searchPresenter);
    this.searchController.getResultsOfSearch(searchQuery, this.searchPresenter);
  }


  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>) {
    this.searchViewModel.username = username;
    this.searchViewModel.levelCompleted = levelCompleted;
    this.searchViewModel.levelName = levelName;
    this.searchViewModel.profileImage = profileImageUrl;
  }

  updateResultList(result:  [Array<UserItem>, Array<TopicItem>, Array<PostItem>]){
    this.searchViewModel.userResultList = result[0];
    this.searchViewModel.topicResultList = result[1];
    this.searchViewModel.postResultList = result[2];

    this.updatePostIndexes();
    this.updateUserIndexes();
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

  onSearchInput(textToSearch: string){
    this.searchController.getResultsOfSearch(textToSearch, this.searchPresenter);
  }

  showErrorAlert(message: String) {

  }
}

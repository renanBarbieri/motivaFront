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

  constructor(public searchViewModel: SearchViewModel,
              private searchController: SearchController,
              private searchPresenter: SearchPresenter,
              private route: ActivatedRoute){}

  ngOnInit(){
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

  showErrorAlert(message: String) {

  }
}

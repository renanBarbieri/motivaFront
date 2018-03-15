import {Component, Inject, OnInit} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchUiView} from "app/useCases/search/SearchUIView";
import SearchViewModel from "@app/ui/search/SearchViewModel";

@Component({
  selector: 'app-home',
  templateUrl: './SearchView.html',
  styleUrls: ['./SearchStyle.css'],
  providers: [
    { provide: SearchViewModel, useClass: SearchViewModel },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: SearchUseCase, useClass: SearchUseCase}
  ]
})
export class SearchComponent implements SearchUiView, OnInit{

  constructor(@Inject(SearchViewModel) public searchViewModel){}

  ngOnInit(){
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

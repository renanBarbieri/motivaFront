import {Injectable} from "@angular/core";
import SearchUseCase from "@app/useCases/search/SearchUseCase";
import {SearchOutputBoundary} from "@app/useCases/search/SearchOutputBoundary";
import {UserDataInputModel} from "@app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary} from "@app/useCases/userData/UserDataOutputBoundary";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";

@Injectable()
export default class SearchController {

  constructor(private searchUseCase: SearchUseCase, private userDataUseCase: UserDataUseCase){}

  getUserData(outputBoundary: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    requestData.userId = "id";
    this.userDataUseCase.getUser(requestData, outputBoundary);
  }

  getResultsOfSearch(searchText: string, outputBoundary: SearchOutputBoundary){
    this.searchUseCase.searchInput(searchText, outputBoundary);
  }

}

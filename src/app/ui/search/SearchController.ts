import {Injectable} from "@angular/core";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchOutputBoundary} from "app/useCases/search/SearchOutputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthController from "app/ui/auth/AuthController";
import AuthUseCase from "app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";

@Injectable()
export default class SearchController extends AuthController {

  constructor(private searchUseCase: SearchUseCase,
              private userDataUseCase: UserDataUseCase,
              private authParentCase: AuthUseCase,
              private routerChild: Router){
    super(authParentCase, routerChild);
  }

  getUserData(authKey: string, outputBoundary: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    requestData.authKey = authKey;
    this.userDataUseCase.getUser(requestData, outputBoundary);
  }

  getResultsOfSearch(searchText: string, outputBoundary: SearchOutputBoundary){
    this.searchUseCase.searchInput(searchText, outputBoundary);
  }

}

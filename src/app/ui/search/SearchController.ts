import {Injectable} from "@angular/core";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchOutputBoundary} from "app/useCases/search/SearchOutputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthController from "app/ui/auth/AuthController";
import AuthUseCase from "app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";
import LeftSideBarController from "@app/components/leftSideBar/LeftSideBarController";
import LoggedPageController from "@app/ui/logged/LoggedPageController";

@Injectable()
export default class SearchController extends LoggedPageController {

  constructor(private searchUseCase: SearchUseCase,
              private userSearch: UserDataUseCase,
              private authSearch: AuthUseCase,
              private routerSearch: Router){
    super(userSearch, authSearch, routerSearch);
  }

  getResultsOfSearch(searchText: string, outputBoundary: SearchOutputBoundary){
    this.searchUseCase.searchInput(searchText, outputBoundary);
  }

}

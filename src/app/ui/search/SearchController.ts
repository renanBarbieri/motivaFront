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

@Injectable()
export default class SearchController extends LeftSideBarController {

  constructor(private searchUseCase: SearchUseCase,
              private userChild: UserDataUseCase,
              private authChild: AuthUseCase,
              private routerChild: Router){
    super(userChild, authChild, routerChild);
  }

  getResultsOfSearch(searchText: string, outputBoundary: SearchOutputBoundary){
    this.searchUseCase.searchInput(searchText, outputBoundary);
  }

}

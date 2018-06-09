import {Injectable} from "@angular/core";
import SearchUseCase from "app/useCases/search/SearchUseCase";
import {SearchOutputBoundary} from "app/useCases/search/SearchOutputBoundary";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import AuthUseCase from "app/useCases/auth/AuthUseCase";
import {Router} from "@angular/router";
import LoggedPageController from "@app/ui/logged/LoggedPageController";

@Injectable()
export default class SearchController extends LoggedPageController {

  constructor(private searchUseCase: SearchUseCase,
              private userSearch: UserDataUseCase,
              private authSearch: AuthUseCase,
              private routerSearch: Router) {
    super(userSearch, authSearch, routerSearch);
  }

  getResultsOfSearch(searchText: string, outputBoundary: SearchOutputBoundary) {
    this.searchUseCase.searchInput(searchText, outputBoundary);
  }

  openProfile(username: string){
    this.routerSearch.navigate(["/"+username+"/profile/"]);
  }

  openPost(postId: string, username: string) {
    this.routerSearch.navigate(["/"+username+"/post/"+postId]);
  }

  openTagList(tagId: string) {
    this.routerSearch.navigate(["/tag/"+tagId]);
  }

}

import UserItem from '@app/ui/models/UserItem';
import TopicItem from '@app/ui/models/TopicItem';
import PostItem from 'app/ui/models/PostItem';
import {Injectable} from "@angular/core";
import {SearchOutputBoundary, SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "@app/useCases/userData/UserDataOutputBoundary";
import {SearchUiView} from "@app/useCases/search/SearchUIView";
import {Router} from "@angular/router";

@Injectable()
export default class SearchPresenter implements SearchOutputBoundary, UserDataOutputBoundary{

  private view: SearchUiView;

  constructor(private router: Router){}

  initPresenter(viewInstance: SearchUiView){
    this.view = viewInstance;
  }

  onSearchSuccess(result: SearchOutputModel) {
    this.view.updateResultList([result.users, result.tags, result.posts]);
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData( responseData.username, responseData.levelCompleted,
                              responseData.levelName, responseData.profileImage,
                              responseData.rewards, responseData.tags);
  }

  onUserDataError(errorData: any) {
    console.log(errorData);
    this.router.navigate(["/"], {replaceUrl: true});
  }
}

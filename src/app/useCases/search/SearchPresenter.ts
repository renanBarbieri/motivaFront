import { PostItem } from 'app/ui/models/PostItem';
import UserItem from '@app/ui/models/UserItem';
import TopicItem from '@app/ui/models/TopicItem';
import PostItem from 'app/ui/models/PostItem';
import {Injectable} from "@angular/core";
import {SearchOutputBoundary, SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "@app/useCases/userData/UserDataOutputBoundary";
import {SearchUiView} from "@app/useCases/search/SearchUIView";

@Injectable()
export default class SearchPresenter implements SearchOutputBoundary, UserDataOutputBoundary{

  private view: SearchUiView;

  initPresenter(viewInstance: SearchUiView){
    this.view = viewInstance;
  }

  onSearchSuccess(result: SearchOutputModel) {
    console.log(result);

    let usersView: Array<UserItem> = result.users.map(function(it){
      const user = new UserItem();
      user.id = it.entityReference;
      user.username = it.username;
      user.avatar = it.profileImage;
      return user;
    });

    let topicsView: Array<TopicItem> = result.users.map(function(it){
      const topic = new TopicItem()

      return topic;
    });

    let postsView: Array<PostItem> = result.users.map(function(it){
      const post = new PostItem();

      return post;
    });

    this.view.updateResultList([usersView, topicsView, postsView]);
  }

  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName, responseData.profileImage, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

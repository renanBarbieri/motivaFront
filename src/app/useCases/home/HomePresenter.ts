import {HomeUiView} from "app/useCases/home/HomeUIView";
import {Injectable} from "@angular/core";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import CardViewModel from "app/useCases/card/CardViewModel";
import {SearchOutputModel} from "@app/useCases/search/SearchOutputBoundary";
import {PostCardModel} from "@app/useCases/postsOfTopicsInterest/PostCardModel";

@Injectable()
export default class HomePresenter implements HomeOutputBoundary{
  private view: HomeUiView;

  constructor() {
  }

  onViewInit(view: HomeUiView) {
    this.view = view;
  }


  onUserDataSuccess(responseData: UserDataOutputModel) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName, responseData.profileImage, responseData.tags);
  }

  onUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
    let topicsList: Map<string, CardViewModel[]> = new Map();
    console.log("Presenter");
    responseData.tagPostsMap.forEach((value: Array<PostCardModel>, key: string) => {
      let cardList: CardViewModel[] = [];
      value.forEach((post: PostCardModel) => {
        let cardItem = new CardViewModel();
        cardItem.id = post.entityReference;
        cardItem.title = post.title;
        cardItem.articleImage = post.imageThumbnail;
        cardItem.authorImage = post.userAvatar;
        cardItem.publishDate = post.publishDate;
        cardItem.favorites = post.favs;
        cardItem.likes = post.stars;
        cardItem.author = post.userName;
        cardList.push(cardItem)
      });
      topicsList.set(key, cardList)
    });

    console.log(topicsList);

    this.view.updateTopicList(topicsList)

  }

  onPostsOfTopicsInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  //TODO: comunicação com a View
  onSearchSuccess(result: SearchOutputModel) {

  }
}

import {HomeUiView} from "app/useCases/home/HomeUIView";
import {Injectable} from "@angular/core";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {GetUserDataOutputModel} from "app/useCases/userData/GetUserDataOutputBoundary";
import {
  GetPostsOfTopicsInterestOutputModel,
  PostCardModel
} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";
import CardViewModel from "app/useCases/card/CardViewModel";

@Injectable()
export default class HomePresenter implements HomeOutputBoundary{
  private view: HomeUiView;

  constructor() {
  }

  onViewInit(view: HomeUiView) {
    this.view = view;
  }


  onGetUserDataSuccess(responseData: GetUserDataOutputModel) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName, responseData.profileImage, responseData.tags);
  }

  onGetUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onGetPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel) {
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

  onGetPostsOfTopicsInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

import {HomeUiView} from "app/useCases/home/HomeUIView";
import {Injectable} from "@angular/core";
import {HomeOutputBoundary} from "app/useCases/home/HomeOutputBoundary";
import {GetUserDataOutputModel} from "app/useCases/userData/GetUserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputModel} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";
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
    responseData.tagPostsMap.forEach((value: Array<string>, key: string) => {
      let cardList: CardViewModel[] = [];
      value.forEach((article: string) => {
        let cardItem = new CardViewModel();
        cardItem.title = article;
        cardItem.articleImage = "https://source.unsplash.com/random/800x600";
        cardItem.authorImage = "https://source.unsplash.com/random/200x200";
        cardItem.publishDate = "19/02/2018";
        cardItem.favorites = 2;
        cardItem.likes = 50;
        cardItem.author = "Renan Barbieri";
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

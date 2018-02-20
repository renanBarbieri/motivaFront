import {HomeUiView} from "@app/presentation/view/HomeUIView";
import {Injectable} from "@angular/core";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {GetUserDataResponseData} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseData} from "@app/interaction/GetTopicsInterestRespondeHandler";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

@Injectable()
export default class HomePresenterImpl implements HomePresenter{
  private view: HomeUiView;

  constructor() {
  }

  onViewInit(view: HomeUiView) {
    this.view = view;
  }


  onGetUserDataSuccess(responseData: GetUserDataResponseData) {
    this.view.updateUserData(responseData.username, responseData.levelCompleted, responseData.levelName);
  }

  onGetUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onGetTopicsOfInterestSuccess(responseData: GetTopicsInterestResponseData) {
    let topicsList: Map<string, CardViewModel[]> = new Map();
    console.log("Presenter");
    responseData.topicListData.forEach((value: Array<string>, key: string) => {
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

  onGetTopicsOfInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

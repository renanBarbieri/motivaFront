import {HomeUiView} from "@app/presentation/view/HomeUIView";
import {Injectable} from "@angular/core";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {GetUserDataResponseData} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseData} from "@app/interaction/GetTopicsInterestRespondeHandler";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
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
    let homeViewModel: HomeViewModel = this.view.getViewModel();

    homeViewModel.username = responseData.username;
    homeViewModel.levelCompleted = responseData.levelCompleted;
    homeViewModel.levelName = responseData.levelName;

    this.view.updateViewModel(homeViewModel);
  }

  onGetUserDataError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }

  onGetTopicsOfInterestSuccess(responseData: GetTopicsInterestResponseData) {
    let homeViewModel: HomeViewModel = this.view.getViewModel();
    homeViewModel.topicsList = new Map();
    responseData.topicListData.forEach((value: string[], key: string) => {
      let cardList: CardViewModel[] = [];
      value.forEach((article: string) => {
        let cardItem = new CardViewModel();
        cardItem.title = article;
        cardList.push(cardItem)
      });
      homeViewModel.topicsList.set(key, cardList)
    });

    this.view.updateViewModel(homeViewModel)

  }

  onGetTopicsOfInterestError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

import {GetUserDataResponseData} from "@app/interaction/GetUserDataResponseHandler";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {GetTopicsInterestResponseData} from "@app/interaction/GetTopicsInterestRespondeHandler";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";
import {HomeUiView} from "@app/presentation/view/HomeUIView";
import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomePresenterImpl implements HomePresenter{
  private _view: HomeUiView;

  set view(value: HomeUiView) {
    this._view = value;
  }

  onGetUserDataSuccess(responseData: GetUserDataResponseData) {
    let homeViewModel: HomeViewModel = this._view.getViewModel();

    homeViewModel.username = responseData.username;
    homeViewModel.levelCompleted = responseData.levelCompleted;
    homeViewModel.levelName = responseData.levelName;

    this._view.updateViewModel(homeViewModel);
  }

  onGetUserDataError(errorData: any) {
    this._view.showErrorAlert(errorData.message);
  }


  onGetTopicsOfInterestSuccess(responseData: GetTopicsInterestResponseData) {
    let homeViewModel: HomeViewModel = this._view.getViewModel();
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

    this._view.updateViewModel(homeViewModel)

  }

  onGetTopicsOfInterestError(errorData: any) {
    this._view.showErrorAlert(errorData.message);
  }
}

import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import HomeView from "@app/presentation/view/HomeView";
import {GetDadosUsuarioResponseData} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {GetTopicosInteresseResponseData} from "@app/interaction/GetTopicosInteresseOutputBoundary";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

export default class HomePresenterImpl implements HomePresenter{
  private view: HomeView;

  constructor(view: HomeView) {
    this.view = view;
  }

  getDadosUsuarioSuccess(responseData: GetDadosUsuarioResponseData) {
    let homeViewModel: HomeViewModel = this.view.homeViewModel;

    homeViewModel.username = responseData.username;
    homeViewModel.levelCompleted = responseData.levelCompleted;
    homeViewModel.levelName = responseData.levelName;

    this.view.updateViewModel(homeViewModel);
  }

  getDadosUsuarioError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }


  getTopicosInsteresseSuccess(responseData: GetTopicosInteresseResponseData) {
    let homeViewModel: HomeViewModel = this.view.homeViewModel;
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

  getTopicosInsteresseError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

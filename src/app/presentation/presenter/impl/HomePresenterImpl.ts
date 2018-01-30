import {GetDadosUsuarioResponseData} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {GetTopicosInteresseResponseData} from "@app/interaction/GetTopicosInteresseOutputBoundary";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";
import {HomePresenterContract, HomeUiContract} from "@app/presentation/contracts/HomeContract";
import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetTopicosInteresseRequestData} from "@app/interaction/GetTopicosInteresseInputBoundary";
import {GetDadosUsuarioRequestData} from "@app/interaction/GetDadosUsuarioInputBoundary";

export default class HomePresenterImpl implements HomePresenterContract{
  private view: HomeUiContract;
  private homeUseCase: HomeUseCase;

  constructor(view: HomeUiContract) {
    this.view = view;
    this.homeUseCase = new HomeUseCaseImpl();
  }

  onViewInit() {
    this.getDadosUsuario();
    this.getTopicosDeInteresse()
  }

  getDadosUsuario(){
    let requestData = new GetDadosUsuarioRequestData();
    requestData.idUsuario = "id";
    this.homeUseCase.getUsuario(requestData, this);
  }

  getTopicosDeInteresse(){
    let requestData = new GetTopicosInteresseRequestData();
    requestData.idUsuario = "id";

    this.homeUseCase.getTopicos(requestData, this);
  }

  getDadosUsuarioSuccess(responseData: GetDadosUsuarioResponseData) {
    let homeViewModel: HomeViewModel = this.view.getViewModel();

    homeViewModel.username = responseData.username;
    homeViewModel.levelCompleted = responseData.levelCompleted;
    homeViewModel.levelName = responseData.levelName;

    this.view.updateViewModel(homeViewModel);
  }

  getDadosUsuarioError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }


  getTopicosInsteresseSuccess(responseData: GetTopicosInteresseResponseData) {
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

  getTopicosInsteresseError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}

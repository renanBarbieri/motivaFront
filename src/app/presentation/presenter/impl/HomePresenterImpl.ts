import {GetUserDataResponseData} from "@app/interaction/GetUserDataResponseHandler";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {GetTopicsInterestResponseData} from "@app/interaction/GetTopicsInterestRespondeHandler";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";
import {HomePresenterContract, HomeUiContract} from "@app/presentation/contracts/HomeContract";
import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";

export default class HomePresenterImpl implements HomePresenterContract{
  private view: HomeUiContract;
  private homeUseCase: HomeUseCase;

  constructor(view: HomeUiContract) {
    this.view = view;
    this.homeUseCase = new HomeUseCaseImpl();
  }

  onViewInit() {
    this.getUserData();
    this.getTopicsOfInterest()
  }

  getUserData(){
    let requestData = new GetUserDataRequestData();
    requestData.userId = "id";
    this.homeUseCase.getUser(requestData, this);
  }

  getTopicsOfInterest(){
    let requestData = new GetTopicsInterestRequestData();
    requestData.userId = "id";

    this.homeUseCase.getTopics(requestData, this);
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

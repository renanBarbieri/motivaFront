import {GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseHandler} from "@app/interaction/GetTopicsInterestRespondeHandler";
import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomeController{
  private homeUseCase: HomeUseCase;

  constructor() {
    this.homeUseCase = new HomeUseCaseImpl();
  }

  onViewInit(presenter: HomePresenter) {
    this.getUserData(presenter);
    this.getTopicsOfInterest(presenter)
  }

  getUserData(responseHandler: GetUserDataResponseHandler){
    let requestData = new GetUserDataRequestData();
    requestData.userId = "id";
    this.homeUseCase.getUser(requestData, responseHandler);
  }

  getTopicsOfInterest(responseHandler: GetTopicsInterestResponseHandler){
    let requestData = new GetTopicsInterestRequestData();
    requestData.userId = "id";

    this.homeUseCase.getTopics(requestData, responseHandler);
  }
}

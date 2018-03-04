import {GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseHandler} from "@app/interaction/GetTopicsInterestRespondeHandler";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomeController{

  constructor(private homeUseCase: HomeUseCaseImpl) {}

  onViewInit(presenter: HomePresenter) {
    this.getUserData(presenter);
  }

  getUserData(responseHandler: GetUserDataResponseHandler){
    let requestData = new GetUserDataRequestData();
    requestData.userId = "id";
    this.homeUseCase.getUser(requestData, responseHandler);
  }

  getPostsOfTopicsOfInterest(responseHandler: GetTopicsInterestResponseHandler, topics: Map<number, string>){
    let requestData = new GetTopicsInterestRequestData();
    requestData.tags = topics;
    this.homeUseCase.getTopics(requestData, responseHandler);
  }
}

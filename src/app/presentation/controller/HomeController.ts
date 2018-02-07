import {Injectable} from "@angular/core";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";

@Injectable()
export default class HomeController{

  constructor(private homeUseCase: HomeUseCaseImpl){}

  getUserData(presenter: HomePresenter){
    let requestData = new GetUserDataRequestData();
    requestData.userId = "id";
    // noinspection JSIgnoredPromiseFromCall
    this.homeUseCase.getUser(requestData, presenter);
  }

  getTopicsOfInterest(presenter: HomePresenter){
    let requestData = new GetTopicsInterestRequestData();
    requestData.userId = "id";
    // noinspection JSIgnoredPromiseFromCall
    this.homeUseCase.getTopics(requestData, presenter);
  }

}

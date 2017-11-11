import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import {GetDadosUsuarioRequestData} from "@app/interaction/GetDadosUsuarioInputBoundary";
import {GetTopicosInteresseRequestData} from "@app/interaction/GetTopicosInteresseInputBoundary";

export default class HomeController{

  private homePresenter: HomePresenter;
  private homeUseCase: HomeUseCase;

  constructor(presenter: HomePresenter){
    this.homePresenter = presenter;
    this.homeUseCase = new HomeUseCaseImpl();
  }

  getDadosUsuario(){
    let requestData = new GetDadosUsuarioRequestData();
    requestData.idUsuario = "id";

    this.homeUseCase.getUsuario(requestData, this.homePresenter);
  }

  getTopicosDeInteresse(){
    let requestData = new GetTopicosInteresseRequestData();
    requestData.idUsuario = "id";

    this.homeUseCase.getTopicos(requestData, this.homePresenter);
  }
}

